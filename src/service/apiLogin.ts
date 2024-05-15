import axios from "axios";
import { responseInterceptor } from "./interceptors/ResponseInterceptor";
import { errorInterceptor } from "./interceptors/ErrorInterceptor";

export const BASE_URL = "https://reqres.in/api/login";

const apiLogin = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

apiLogin.interceptors.response.use(
    (response) => responseInterceptor(response),
    (error) => errorInterceptor(error)
);

export { apiLogin };