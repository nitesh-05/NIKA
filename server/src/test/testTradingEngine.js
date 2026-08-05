import {
    getCompleteStockData
}
from "../trading/services/marketService.js";

import {
    analyzeStock
}
from "../trading/engine/tradingEngine.js";

const stock =
    await getCompleteStockData("TCS");

const analysis =
    analyzeStock(stock.history);

console.dir(analysis, {
    depth: null
});