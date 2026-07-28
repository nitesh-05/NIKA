export function parseAIResponse(text) {

    try {

        return JSON.parse(text);

    }

    catch {

        return {

            type: "chat",

            response: text,

        };

    }

}