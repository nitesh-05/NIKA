import YahooFinance from "yahoo-finance2";

const yahooFinance = new YahooFinance({
    suppressNotices: ["yahooSurvey"],
});

const period2 = new Date();

const period1 = new Date();
period1.setMonth(period1.getMonth() - 6);

const chart = await yahooFinance.chart("TCS.NS", {
    period1,
    period2,
    interval: "1d",
});

console.log(chart);