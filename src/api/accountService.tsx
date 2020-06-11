import { appAxios } from "./appAxios";
import { AxiosResponse, AxiosError } from "axios";

export const accountService = {
  login: async (username: string, password: string) => {
    // return {
    //   data: {
    //     access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJleHAiOiI5OTk5OTk5OTk5OTk5OSJ9.8BunVT1Hf3qO7E2Mbrnarsb79srJe_tXcBAczFnps4Q",
    //     refresh_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJleHAiOiI5OTk5OTk5OTk5OTk5OSJ9.8BunVT1Hf3qO7E2Mbrnarsb79srJe_tXcBAczFnps4Q"
    //   },
    // };
    return await appAxios.post("/auth", { username, password })
      .then((res: AxiosResponse) => {
        return res;
      })
      .catch((err: AxiosError) => {
        console.log(err);
      });
  },
  refreshToken: async (refresh_token: string) => {
    return {
      data: {
        access_token: "NEWeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJleHAiOiI5OTk5OTk5OTk5OTk5OSJ9.8BunVT1Hf3qO7E2Mbrnarsb79srJe_tXcBAczFnps4Q",
        refresh_token: "NEWeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJleHAiOiI5OTk5OTk5OTk5OTk5OSJ9.8BunVT1Hf3qO7E2Mbrnarsb79srJe_tXcBAczFnps4Q"
      },
    };
    // return await appAxios.post("/login", { username, password });
    //   .then((res: AxiosResponse) => {
    //     return res;
    //   })
    //   .catch((err: AxiosError) => {
    //     console.log(err);
    //   });
  },
};
