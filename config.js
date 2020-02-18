import Unsplash from "unsplash-js";
import axios from "axios";

const unsplashAccessKey = process.env.UNSPLASH_ACCESS_KEY;

export const axiosInstance = axios.create({
  baseURL: "https://api.unsplash.com/",
  timeout: 1000,
  headers: { Authorization: `Client-ID ${unsplashAccessKey}` }
});
