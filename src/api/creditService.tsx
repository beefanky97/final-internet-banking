// import { appAxios } from "./appAxios";
// import { AxiosResponse, AxiosError } from "axios";

import { appAxios } from "./appAxios";
import Axios, { AxiosResponse, AxiosError } from "axios";

export const creditService = {
  transfer: async (transferInfo: Object) => {
    console.log("service transfer", transferInfo);
    return await appAxios.post("/transactions/customer/sending/add", transferInfo).then((res: AxiosResponse) => {
      if (res.status === 400) {
        return;
      }
      return res;
    });
  },
  confirmOTP: async (token: string) => {
    console.log("token", token);
    return await appAxios.post("/transactions/verify-otp", { token }).then((res: AxiosResponse) => {
      return res;
    });
  },
  getCardInfo: async (card_number: number, partner_code: number) => {
    console.log("api card", card_number);
    return await appAxios
      .post("/cards/customer/detail", { card_number, partner_code })
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
  getDebtList: async () => {
    console.log("overrrrr1222");
    console.log("axios", Axios);
    return await Axios.all([
      appAxios.get("/debtors/my-created"),
      appAxios.get("/debtors/others-sent"),
      appAxios.get("/debtors/my-created/unpaid"),
      appAxios.get("/debtors/others-sent/unpaid")
    ])
      .then(Axios.spread((...[othersDebt, myDebt, othersUnpaidDebt, myUnpaidDebt]: any) => {
        console.log("ressss", othersDebt, myDebt, othersUnpaidDebt, myUnpaidDebt);
        return {othersDebt, myDebt, othersUnpaidDebt, myUnpaidDebt}
      }))
      .catch((err: AxiosError) => {
        console.log(err);
      });
  },
  addDebtReminder: async (debtInfo: number) => {
    console.log("api card", debtInfo);
    return await appAxios
      .post("/debtors/add", debtInfo)
      .then((res: AxiosResponse) => {
        return res;
      })
      .catch((err: AxiosError) => {
        console.log(err);
      });
  },
};
