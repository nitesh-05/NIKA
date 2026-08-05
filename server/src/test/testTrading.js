import YahooFinance from "yahoo-finance2";

const yahooFinance = new YahooFinance({
  suppressNotices: ["yahooSurvey"],
});

const data = await yahooFinance.chart("TCS.NS", {
  range: "6mo",
  interval: "1d",
});

console.log(data);