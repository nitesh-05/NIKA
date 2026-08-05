import dotenv from "dotenv";

import {

getQuote,

searchCompany,

getCompanyProfile,

}

from "../trading/providers/finnhubProvider.js";


// dotenv.config();
// console.log("API KEY:", process.env.FINNHUB_API_KEY);


const company=await searchCompany(

"TCS"

);


console.log(company);