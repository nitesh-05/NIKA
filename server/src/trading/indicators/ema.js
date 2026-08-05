export function calculateEMA(prices, period = 20) {

    if (prices.length < period) {

        return [];

    }

    const multiplier = 2 / (period + 1);

    const ema = [];

    let previousEMA =

        prices
            .slice(0, period)
            .reduce((a, b) => a + b, 0) / period;

    ema.push(previousEMA);

    for (let i = period; i < prices.length; i++) {

        previousEMA =

            (prices[i] - previousEMA) *

            multiplier +

            previousEMA;

        ema.push(previousEMA);

    }

    return ema;

}