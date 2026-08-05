import { getQuote } from "../trading/providers/yahooProvider.js";

const quote = await getQuote("TCS.NS");

console.log(quote);