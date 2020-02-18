import axios from "axios";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

const unsplashAccessKey = publicRuntimeConfig.UNSPLASH_ACCESS_KEY;

export const axiosInstance = axios.create({
  baseURL: "https://api.unsplash.com/",
  timeout: 3000,
  headers: { Authorization: `Client-ID ${unsplashAccessKey}` }
});
