import YahooFinance from "yahoo-finance2";

const yahooFinance = new YahooFinance({
    suppressNotices: ["yahooSurvey"],
});

export async function searchCompany(query) {
    return yahooFinance.search(query);
}

export async function getQuote(symbol) {
    return yahooFinance.quote(symbol);
}

export async function getHistory(
    symbol,
    months = 6,
    interval = "1d"
) {
    const period2 = new Date();

    const period1 = new Date();
    // period1.setMonth(period1.getMonth() - months);
    period1.setFullYear(period1.getFullYear() - 1);

    return yahooFinance.chart(symbol, {
        period1,
        period2,
        interval,
    });
}