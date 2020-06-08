// import { appAxios } from "./appAxios";
// import { AxiosResponse, AxiosError } from "axios";

export const accountService = {
  login: async (username: string, password: string) => {
    return {
      data: {
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJleHAiOjk5OTk5OTk5OX0.0P5-fQX_a6Tx2mlOAGytBjPS0TydPBZ9g6GWLdwd5PQ"
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
