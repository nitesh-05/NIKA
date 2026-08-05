import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const API_KEY = process.env.FINNHUB_API_KEY;

async function test() {
  console.log("KEY:", API_KEY);

  const res = await axios.get(
    "https://finnhub.io/api/v1/search",
    {
      params: {
        q: "TCS",
        token: API_KEY,
      },
    }
  );

  console.log(res.data);
}

test().catch(console.error);