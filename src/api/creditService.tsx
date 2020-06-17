// import { appAxios } from "./appAxios";
// import { AxiosResponse, AxiosError } from "axios";

import { appAxios } from "./appAxios";
import { AxiosResponse, AxiosError } from "axios";

export const creditService = {
  transfer: async () => {
    return {
      data: {
        msg: "success!!!",
      },
    };
    // return await appAxios.post("/login", { username, password })
    //   .then((res: AxiosResponse) => {
    //     return res;
    //   })
    //   .catch((err: AxiosError) => {
    //     console.log(err);
    //   });
  },
  getCardInfo: async (card_number: string) => {
    return {
      data: {
        name: "Lê Thanh Tâm",
        card_number: "999999999",
        bank: "3TBank"
      }
    }
    // return await appAxios
    //   .post("/cards/info", card_number)
    //   .then((res: AxiosResponse) => {
    //     return res;
    //   })
    //   .catch((err: AxiosError) => {
    //     console.log(err);
    //   });
  },
};
