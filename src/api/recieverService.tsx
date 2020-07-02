// import { appAxios } from "./appAxios";
// import { AxiosResponse, AxiosError } from "axios";

import { appAxios } from "./appAxios";
import { AxiosResponse, AxiosError } from "axios";

export const receiverService = {
  getReciever: async () => {
    return await appAxios
      .get("/receivers/customer")
      .then((res: AxiosResponse) => {
        console.log("recivers", res.data);
        return res;
      });
  },
  deleteReciever: async (id_customer: string) => {
    return await appAxios
      .post(`/receivers/customer/delete/${id_customer}`, {})
      .then((res: AxiosResponse) => {
        console.log("recivers", res.data);
        return res;
      });
  },
};
