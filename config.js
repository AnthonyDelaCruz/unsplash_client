import getConfig from "next/config";
import Unsplash from "unsplash-js";
import axios from "axios";

const { publicRuntimeConfig } = getConfig();
const axiosInstance = axios.create({});
// must instantiate fetch globally for unsplash-js to work
global.fetch = axiosInstance;

const unsplashAccessKey = env.UNSPLASH_ACCESS_KEY;

export const unsplashInstance = new Unsplash({
  accessKey: unsplashAccessKey
});
