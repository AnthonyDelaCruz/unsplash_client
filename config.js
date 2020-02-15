import Unsplash from "unsplash-js";
import axios from "axios";


const axiosInstance = axios.create({});
// must instantiate fetch globally for unsplash-js to work
global.fetch = axiosInstance;

const unsplashAccessKey = process.env.UNSPLASH_ACCESS_KEY;

export const unsplashInstance = new Unsplash({
  accessKey: unsplashAccessKey
});
