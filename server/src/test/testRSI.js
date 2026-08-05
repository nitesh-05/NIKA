import { getHistory } from "../trading/providers/yahooProvider.js";
import { calculateRSI } from "../trading/indicators/rsi.js";

const history = await getHistory("TCS.NS");

const prices = history.quotes
    .map(c => c.close)
    .filter(Boolean);

const rsi = calculateRSI(prices);

console.log("Latest RSI:", rsi.at(-1));