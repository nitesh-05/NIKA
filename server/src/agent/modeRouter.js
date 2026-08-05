import { getMode } from "./modeManager.js";

import { tradingAgent } from "./modes/trading/tradingAgent.js";

export async function modeRouter(message){

    const mode=getMode();

    switch(mode){

        case "trading":

            return tradingAgent(message);

        default:

            return null;

    }

}