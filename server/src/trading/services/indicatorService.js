import { calculateEMA } from "../indicators/ema.js";
import { calculateRSI } from "../indicators/rsi.js";
import { generateSignal } from "../utils/signalGenerator.js";

export function calculateIndicators(history) {

    const prices = history
        .map(candle => candle.close)
        .filter(price => price != null);

    const ema20 =
        prices.length >= 20
            ? calculateEMA(prices, 20).at(-1)
            : null;

    const ema50 =
        prices.length >= 50
            ? calculateEMA(prices, 50).at(-1)
            : null;

    const ema200 =
        prices.length >= 200
            ? calculateEMA(prices, 200).at(-1)
            : null;

    const rsi =
    prices.length >= 15
        ? calculateRSI(prices).at(-1)
        : null;

    function getRSISignal(rsi){

    if(rsi == null)
        return "Unknown";

    if(rsi >= 70)
        return "Overbought";

    if(rsi <= 30)
        return "Oversold";

    return "Neutral";

}

const signal = generateSignal({

    price: prices.at(-1),

    prices,

    ema20,

    ema50,

    ema200,

    rsi,

});
        

    return {
       
     price: prices.at(-1),

    ema20,

    ema50,

    ema200,

    rsi,

    signal,
    };
}