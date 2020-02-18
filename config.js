import axios from "axios";

const unsplashAccessKey = process.env.UNSPLASH_ACCESS_KEY;

export const axiosInstance = axios.create({
  baseURL: "https://api.unsplash.com/",
  timeout: 3000,
  headers: { Authorization: `Client-ID ${unsplashAccessKey}` }
});
