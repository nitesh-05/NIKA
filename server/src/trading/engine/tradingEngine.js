import { calculateIndicators }
from "../services/indicatorService.js";

import { generateRecommendation }
from "../services/recommendationService.js";

export function analyzeStock(history) {

    const indicators =
        calculateIndicators(history);

    const recommendation =
        generateRecommendation(
            indicators.signal
        );

    return {

        indicators,

        recommendation,

    };

}