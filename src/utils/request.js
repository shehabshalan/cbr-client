import axios from "axios";

export const request = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://covid-19-recommendation.herokuapp.com"
      : "http://localhost:8000",
});
