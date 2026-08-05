export function calculateRSI(prices, period = 14) {

    if (prices.length <= period) {
        return [];
    }

    const gains = [];
    const losses = [];

    for (let i = 1; i < prices.length; i++) {

        const diff = prices[i] - prices[i - 1];

        gains.push(diff > 0 ? diff : 0);
        losses.push(diff < 0 ? Math.abs(diff) : 0);
    }

    let avgGain =
        gains.slice(0, period).reduce((a, b) => a + b, 0) / period;

    let avgLoss =
        losses.slice(0, period).reduce((a, b) => a + b, 0) / period;

    const rsi = [];

    for (let i = period; i < gains.length; i++) {

        avgGain =
            ((avgGain * (period - 1)) + gains[i]) / period;

        avgLoss =
            ((avgLoss * (period - 1)) + losses[i]) / period;

        if (avgLoss === 0) {
            rsi.push(100);
            continue;
        }

        const rs = avgGain / avgLoss;

        rsi.push(
            100 - (100 / (1 + rs))
        );
    }

    return rsi;
}