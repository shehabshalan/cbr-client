import axios from "axios";

export const request = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://cbr-api.onrender.com"
      : "http://localhost:8000",
});
