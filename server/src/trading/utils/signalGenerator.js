export function generateSignal(indicators) {

    const {
        price,
        ema20,
        ema50,
        ema200,
        rsi,
    } = indicators;

    console.log({
    price,
    ema20,
    ema50,
    ema200,
    rsi,
});

console.log(typeof price);
console.log(typeof ema20);
console.log(typeof ema50);
console.log(typeof ema200);

    const signal = {
        trend: "Neutral",
        momentum: "Neutral",
        strength: 0,
        confidence: 0,
        risk: "Medium",
        recommendation: "HOLD",
        reasons: [],
    };

    //--------------------------------------------------
    // EMA Trend Analysis
    //--------------------------------------------------

    if (ema20 && ema50 && ema200) {

        // Strong Bullish
        if (
            price > ema20 &&
            ema20 > ema50 &&
            ema50 > ema200
        ) {

            signal.trend = "Strong Bullish";
            signal.strength += 40;

            signal.reasons.push(
                "Perfect bullish EMA alignment."
            );

        }

        // Bullish Recovery
        else if (
            price > ema20 &&
            ema20 > ema50 &&
            price < ema200
        ) {

            signal.trend = "Bullish Recovery";
            signal.strength += 30;

            signal.reasons.push(
                "Short-term trend is bullish but price is still below EMA200."
            );

        }

        // Bullish
        else if (
            price > ema20 &&
            ema20 > ema50
        ) {

            signal.trend = "Bullish";
            signal.strength += 25;

            signal.reasons.push(
                "Price is above EMA20 and EMA20 is above EMA50."
            );

        }

        // Strong Bearish
        else if (
            price < ema20 &&
            ema20 < ema50 &&
            ema50 < ema200
        ) {

            signal.trend = "Strong Bearish";
            signal.strength += 40;

            signal.reasons.push(
                "Perfect bearish EMA alignment."
            );

        }

        // Bearish
        else if (
            price < ema20 &&
            ema20 < ema50
        ) {

            signal.trend = "Bearish";
            signal.strength += 25;

            signal.reasons.push(
                "Price is below EMA20 and EMA20 is below EMA50."
            );

        }

        // Sideways
        else {

            signal.trend = "Sideways";

            signal.reasons.push(
                "Mixed EMA structure."
            );

        }

    }

    //--------------------------------------------------
    // RSI Analysis
    //--------------------------------------------------

    if (rsi >= 80) {

        signal.momentum = "Extremely Overbought";

        signal.strength -= 15;

        signal.reasons.push(
            "Very high RSI. High probability of pullback."
        );

    }

    else if (rsi >= 70) {

        signal.momentum = "Overbought";

        signal.strength -= 10;

        signal.reasons.push(
            "RSI above 70."
        );

    }

    else if (rsi >= 60) {

        signal.momentum = "Strong";

        signal.strength += 15;

        signal.reasons.push(
            "Momentum is strong."
        );

    }

    else if (rsi >= 50) {

        signal.momentum = "Healthy";

        signal.strength += 10;

        signal.reasons.push(
            "Momentum is healthy."
        );

    }

    else if (rsi >= 30) {

        signal.momentum = "Weak";

        signal.reasons.push(
            "Momentum is weak."
        );

    }

    else if (rsi >= 20) {

        signal.momentum = "Oversold";

        signal.strength += 20;

        signal.reasons.push(
            "Possible reversal zone."
        );

    }

    else {

        signal.momentum = "Extremely Oversold";

        signal.strength += 25;

        signal.reasons.push(
            "High probability reversal zone."
        );

    }

    //--------------------------------------------------
    // Recommendation
    //--------------------------------------------------

    switch (signal.trend) {

        case "Strong Bullish":
            signal.recommendation = "STRONG BUY";
            break;

        case "Bullish":
            signal.recommendation = "BUY";
            break;

        case "Bullish Recovery":
            signal.recommendation = "ACCUMULATE";
            break;

        case "Bearish":
            signal.recommendation = "SELL";
            break;

        case "Strong Bearish":
            signal.recommendation = "STRONG SELL";
            break;

        default:
            signal.recommendation = "HOLD";
            break;

    }

    //--------------------------------------------------
    // Confidence
    //--------------------------------------------------

    signal.confidence = Math.max(
        0,
        Math.min(signal.strength, 100)
    );

    //--------------------------------------------------
    // Risk
    //--------------------------------------------------

    if (
        signal.trend === "Strong Bullish" &&
        rsi < 70
    ) {

        signal.risk = "Low";

    }

    else if (
        signal.trend === "Bullish" ||
        signal.trend === "Bullish Recovery"
    ) {

        signal.risk = "Medium";

    }

    else {

        signal.risk = "High";

    }

    return signal;

}