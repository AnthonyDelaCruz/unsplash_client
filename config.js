import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://api.unsplash.com/",
  timeout: 3000,
  headers: {
    Authorization: `Client-ID ${process.env.ACCESS_KEY}`,
  },
});
