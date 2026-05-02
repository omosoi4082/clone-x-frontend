import axios from "axios"; //HTTP 요청을 쉽게 보내는 라이브러리

const api = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 5000,
});

const authApi = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 5000,
});

authApi.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export { api, authApi };
