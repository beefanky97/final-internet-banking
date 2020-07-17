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
  getCardInfo: async (card_number: number) => {
    console.log("api card", card_number);
    return await appAxios
      .post("/cards/customer/detail", {card_number})
      .then((res: AxiosResponse) => {
        return res;
      })
      .catch((err: AxiosError) => {
        console.log(err);
      });
  },
  getHistoryTransaction: async (type: string) => {
    console.log("overrrrr1");
    return await appAxios
      .get(`/transactions/customer/${type}`)
      .then((res: AxiosResponse) => {
        return res;
      })
      .catch((err: AxiosError) => {
        console.log(err);
      });
  },
};
