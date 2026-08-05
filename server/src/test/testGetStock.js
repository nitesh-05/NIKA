import { getQuote } from "../trading/providers/finnhubProvider.js";
import { getStock } from "../trading/services/marketService.js";

// const stock = await getStock("TCS");
const res = await getQuote("MSFT");

console.log("stock", res);