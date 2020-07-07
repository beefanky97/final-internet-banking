import { AxiosResponse, AxiosError } from "axios";

import { appAxios } from "src/api/appAxios";

export const adminService = {
  getTransactions: async (partner_code: number) => {
    // console.log("adminService getTransactions", partner_code);

    if (partner_code === 1) {
      return await appAxios
        .get("/transactions/admin")
        .then((res: AxiosResponse) => {
          return res;
        })
        .catch((err: AxiosError) => {
          return err;
        });
    } else {
      return await appAxios
        .post("/transactions/admin/partner-bank", {partner_code})
        .then((res: AxiosResponse) => {
          console.log(res);
          return res;
        })
        .catch((err: AxiosError) => {
          console.log(err);
          return err;
        });
    }
  },
  getDetailTransaction: async (id: string) => {
    console.log("adminService getDetailTransaction", id);
    return await appAxios
      .get(`/transactions/detail/${id}`)
      .then((res: AxiosResponse) => {
        return res.data;
      })
      .catch((err: AxiosError) => {
        return err;
      });
  },
};
