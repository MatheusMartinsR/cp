import axios from "axios";
import { responseInterceptor } from "./interceptors/ResponseInterceptor";
import { errorInterceptor } from "./interceptors/ErrorInterceptor";

export const BASE_URL = "https://developer.marvel.com/";

const apiMarvel = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

apiMarvel.interceptors.response.use(
    (response) => responseInterceptor(response),
    (error) => errorInterceptor(error)
);

export { apiMarvel };