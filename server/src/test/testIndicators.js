import { getHistory } from "../trading/providers/yahooProvider.js";
import { calculateIndicators } from "../trading/services/indicatorService.js";

const history = await getHistory("TCS.NS");

const indicators = calculateIndicators(history.quotes);
console.log("Total candles:", history.quotes.length);

console.log(indicators);