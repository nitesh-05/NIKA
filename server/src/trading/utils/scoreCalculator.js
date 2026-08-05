export function calculateScore(signal) {

    let score = 0;

    //------------------------------------------------
    // Trend
    //------------------------------------------------

    switch (signal.trend) {

        case "Strong Bullish":
            score += 40;
            break;

        case "Bullish":
            score += 30;
            break;

        case "Bullish Recovery":
            score += 25;
            break;

        case "Transition":
            score += 15;
            break;

        case "Bearish":
            score += 10;
            break;

        case "Strong Bearish":
            score += 0;
            break;
    }

    //------------------------------------------------
    // Momentum
    //------------------------------------------------

    switch (signal.momentum) {

        case "Strong":
            score += 20;
            break;

        case "Healthy":
            score += 15;
            break;

        case "Oversold":
            score += 15;
            break;

        case "Weak":
            score += 5;
            break;

        case "Overbought":
            score += 5;
            break;
    }

    return Math.min(score, 100);

}