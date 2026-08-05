import {
    getHistory,
} from "../trading/providers/yahooProvider.js";

import {
    calculateEMA,
} from "../trading/indicators/ema.js";

const history =
await getHistory("TCS.NS");

const prices =

history.quotes.map(

q => q.close

);

const ema20 =

calculateEMA(

prices,

20

);

console.log(

"Latest EMA20:",

ema20.at(-1)

);