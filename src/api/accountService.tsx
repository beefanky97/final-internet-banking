import { appAxios } from "./appAxios";
import { AxiosResponse, AxiosError } from "axios";

export const accountService = {
  login: async (username: string, password: string) => {
    return await appAxios
      .post("/auth", { username, password })
      .then((res: AxiosResponse) => {
        console.log('data', res.data);
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
  changePassword: async (current_password: string, new_password: string, confirm_password: string) => {
    return await appAxios
      .post("/customers/change-password", { current_password, new_password, confirm_password })
      .then((res: AxiosResponse) => {
        return res;
      });
  },
  forgetPassword: async (email: string) => {
    return await appAxios
      .post('/forget-password/send-email', { email })
      .then((res: AxiosResponse) => {
        return res;
      })
      .catch((err: AxiosError) => {
        console.log(err.response);
      })
  },
  resetPassword: async (token: any, new_password: string, confirm_password: string) => {
    return await appAxios
      .post(`/forget-password/verify/${token}`, { new_password, confirm_password })
      .then((res: AxiosResponse) => {
        return res;
      })
      .catch((err) => {
        console.log(err.response);
      })
  }
};
