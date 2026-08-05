import {
    searchCompany,
    getQuote,
    getHistory,
} from "../providers/yahooProvider.js";

function pickBestMatch(results, input) {

    const text = input.toLowerCase();

    return (
        results.find(r => r.symbol?.endsWith(".NS")) ||
        results.find(r => r.shortname?.toLowerCase().includes(text)) ||
        results.find(r => r.longname?.toLowerCase().includes(text)) ||
        results[0]
    );
}

export async function getCompleteStockData(stockName) {

    const search = await searchCompany(stockName);

    if (!search.quotes?.length) {
        throw new Error(`Stock "${stockName}" not found.`);
    }

    const company = pickBestMatch(search.quotes, stockName);

    const [quote, history] = await Promise.all([
        getQuote(company.symbol),
        getHistory(company.symbol)
    ]);

    return {
        company: {
            symbol: quote.symbol,
            name: quote.longName || quote.shortName,
            exchange: quote.fullExchangeName,
            currency: quote.currency,
        },

        quote: {
            price: quote.regularMarketPrice,
            open: quote.regularMarketOpen,
            high: quote.regularMarketDayHigh,
            low: quote.regularMarketDayLow,
            previousClose: quote.regularMarketPreviousClose,
            volume: quote.regularMarketVolume,
            marketCap: quote.marketCap,
            pe: quote.trailingPE,
            eps: quote.epsTrailingTwelveMonths,
            dividend: quote.dividendYield,
        },

        history: history.quotes
    };
}