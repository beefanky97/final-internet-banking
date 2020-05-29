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
  baseURL: "https://jsonplaceholder.typicode.com",
  cancelToken: sourceCancel.token,
//   httpsAgent: agent // This agent prevent ERR_TLS_CERT_ALTNAME_INVALID issue when in SSR development enviroment
})
export const setHeaderAppAxios = (token: string) => {
  instanceAppAxios.defaults.headers.common = {
    Authorization: "Bearer " + token
  };
};

// setHeaderAppAxios(jwt);

export { instanceAppAxios as appAxios };