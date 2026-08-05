import { calculateScore } from "../utils/scoreCalculator.js";

export function generateRecommendation(signal) {

    const score = calculateScore(signal);

    let recommendation = "HOLD";

    if (score >= 80)
        recommendation = "STRONG BUY";

    else if (score >= 65)
        recommendation = "BUY";

    else if (score >= 45)
        recommendation = "ACCUMULATE";

    else if (score >= 25)
        recommendation = "HOLD";

    else
        recommendation = "SELL";

    return {

        score,

        recommendation,

        confidence: score,

    };

}