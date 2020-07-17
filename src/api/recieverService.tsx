// import { appAxios } from "./appAxios";
// import { AxiosResponse, AxiosError } from "axios";

import { appAxios } from "./appAxios";
import { AxiosResponse, AxiosError } from "axios";

export const receiverService = {
  getReciever: async () => {
    return await appAxios
      .get("/receivers/customer")
      .then((res: AxiosResponse) => {
        return res;
      });
  },
  deleteReciever: async (id: string) => {
    return await appAxios
      .post(`/receivers/customer/delete/${id}`, {})
      .then((res: AxiosResponse) => {
        return res;
      });
  },
  editReciever: async (id: string, card_number: number, reminiscent_name: string) => {
    return await appAxios
      .post(`/receivers/customer/edit/${id}`, {card_number, reminiscent_name})
      .then((res: AxiosResponse) => {
        return res;
      });
  },
  addReciever: async (card_number: number, reminiscent_name: string) => {
    return await appAxios
      .post('/receivers/customer/add', {card_number, reminiscent_name})
      .then((res: AxiosResponse) => {
        return res;
      });
  },
};
