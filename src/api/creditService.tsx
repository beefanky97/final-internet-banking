// import { appAxios } from "./appAxios";
// import { AxiosResponse, AxiosError } from "axios";

export const creditService = {
  transfer: async () => {
    return {
      data: {
        msg: "success!!!"
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
