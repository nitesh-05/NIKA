import axios from "axios";
import "dotenv/config";

const API_KEY = process.env.FINNHUB_API_KEY;
const BASE_URL = "https://finnhub.io/api/v1";

async function request(endpoint, params = {}) {

    const response = await axios.get(
        `${BASE_URL}${endpoint}`,
        {
            timeout: 10000,
            params: {
                ...params,
                token: API_KEY,
            },
        }
    );

    return response.data;
}

export const searchCompany = (query) =>
    request("/search", { q: query });

export const getQuote = (symbol) =>
    request("/quote", { symbol });

export const getCompanyProfile = (symbol) =>
    request("/stock/profile2", { symbol });