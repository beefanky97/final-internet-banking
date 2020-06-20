import { appAxios } from "./appAxios";
import { AxiosResponse, AxiosError } from "axios";

export const accountService = {
  login: async (username: string, password: string) => {
    return await appAxios
      .post("/auth", { username, password })
      .then((res: AxiosResponse) => {
        return res;
      })
      .catch((err: AxiosError) => {
        console.log(err);
      });
  },
  refreshToken: async (access_token: string, refresh_token: string) => {
    return await appAxios
      .post("/auth/refresh", { access_token, refresh_token })
      .then((res: AxiosResponse) => {
        return res;
      });
  },
};
