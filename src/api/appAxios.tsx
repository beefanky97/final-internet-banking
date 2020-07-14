import axios from "axios";
// import https from 'https';

// const { publicRuntimeConfig = {} } = getConfig() || {}
// const { API_URL, APP_TOKEN: jwt = "", APP_ENV } = publicRuntimeConfig;
// const baseURL = API_URL;

const CancelToken = axios.CancelToken;
export const sourceCancel = CancelToken.source();
// let agent;
// if (typeof window === 'undefined' && APP_ENV !== "production") {
//   agent = new https.Agent({
//     rejectUnauthorized: false
//   });
// }

const instanceAppAxios = axios.create({
  baseURL: "https://internet-banking-api-17.herokuapp.com",
  cancelToken: sourceCancel.token,
});

const existed_access_token = sessionStorage
  ? sessionStorage.getItem("access_token")
  : "";
const existed_refresh_token = sessionStorage
  ? sessionStorage.getItem("refresh_token")
  : "";

export const setHeaderAppAxios = (
  access_token: string,
  refresh_token: string
) => {
  instanceAppAxios.defaults.headers = {
    x_access_token: access_token,
    x_refresh_token: refresh_token,
  };
};
console.log("access", existed_access_token);
console.log("refresh", existed_refresh_token);

setHeaderAppAxios(
  existed_access_token as string,
  existed_refresh_token as string
);

// Add a response interceptor
instanceAppAxios.interceptors.response.use(
  function (response) {
    // Do something with response data
    return response;
  },
  function (error) {
    // Handle when not Auth
    if (error.response && +error.response.status === 401) {
      alert("Tài khoản hết hạn, xin đăng nhập lại!");
      window.location.href = "./login";
      return;
    }

    // Handle when not Auth
    if (error.response && +error.response.status === 400) {
      alert("Có gì đó sai, hãy thử lại!");
      window.location.href = "./login";
      return;
    }
    return Promise.reject(error);
  }
);

export { instanceAppAxios as appAxios };
