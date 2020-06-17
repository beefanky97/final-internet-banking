import axios from 'axios';
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
  baseURL: "http://localhost:3333",
  cancelToken: sourceCancel.token,
})

const existed_access_token = sessionStorage ? sessionStorage.getItem('access_token') : '';

export const setHeaderAppAxios = (token: string) => {
  instanceAppAxios.defaults.headers.common = {
    Authorization: "Bearer " + token
  };
};

setHeaderAppAxios(existed_access_token as string);

export { instanceAppAxios as appAxios };