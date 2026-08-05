export function extractEntities(message) {

    const entities = {};

    // Budget

    const budget = message.match(/(\d+)/);

    if (budget) {

        entities.budget = Number(budget[1]);

    }

    return entities;

}