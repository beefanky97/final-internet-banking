// import { appAxios } from "./appAxios";
// import { AxiosResponse, AxiosError } from "axios";

import { appAxios } from "./appAxios";
import { AxiosResponse, AxiosError } from "axios";

export const creditService = {
  transfer: async (transferInfo: Object) => {
    console.log("service transfer", transferInfo);
    return await appAxios.post("/transactions/customer/sending/add", transferInfo)
      .then((res: AxiosResponse) => {
        if(res.status === 400) {
          console.log("stop here!");
          return;
        }
        return res;
      })
      // .catch((err: AxiosError) => {
      //   console.log("stop here!", err.toJSON());
      //   if(err.response && +err.response.status === 400) {
      //     console.log("stop here!");
      //     return;
      //   }
      // });
  },
  getCardInfo: async (card_number: string) => {
    return {
      data: {
        name: "Lê Thanh Tâm",
        card_number: "999999999",
        bank: "3TBank",
        is_error: false
      }
    }
    // return await appAxios
    //   .post("cards/customer", card_number)
    //   .then((res: AxiosResponse) => {
    //     return res;
    //   })
    //   .catch((err: AxiosError) => {
    //     console.log(err);
    //   });
  },
};
