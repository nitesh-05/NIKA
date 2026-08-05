export function detectTradingIntent(message) {

    const text = message.toLowerCase();

    // Top Stocks

    if (
        text.includes("best stock") ||
        text.includes("top stock") ||
        text.includes("good stock")
    ) {

        return {

            intent: "TOP_STOCKS",

            entities: {}

        };

    }

    // Intraday

    if (
        text.includes("intraday") ||
        text.includes("day trade")
    ) {

        return {

            intent: "INTRADAY",

            entities: {}

        };

    }

    // Swing

    if (
        text.includes("swing")
    ) {

        return {

            intent: "SWING",

            entities: {}

        };

    }

    // Long Term

    if (
        text.includes("long term")
    ) {

        return {

            intent: "LONG_TERM",

            entities: {}

        };

    }

    return null;

}