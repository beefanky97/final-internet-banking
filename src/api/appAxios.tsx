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

const existed_access_token = sessionStorage ? sessionStorage.getItem("access_token") : "";
const existed_refresh_token = sessionStorage ? sessionStorage.getItem("refresh_token") : "";

export const setHeaderAppAxios = (access_token: string, refresh_token: string) => {
  instanceAppAxios.defaults.headers = {
    x_access_token: access_token,
    x_refresh_token: refresh_token
  };
};
console.log("access", existed_access_token);
console.log("refresh", existed_refresh_token);

setHeaderAppAxios(existed_access_token as string, existed_refresh_token as string);

export { instanceAppAxios as appAxios };
