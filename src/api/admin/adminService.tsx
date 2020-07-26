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
        .post("/transactions/admin/partner-bank", { partner_code })
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
  getTellers: async () => {
    // console.log("adminService getTransactions", partner_code);

    return await appAxios
      .get("/customers/admin")
      .then((res: AxiosResponse) => {
        // console.log('customer/admin/res', res)
        return res;
      })
      .catch((err: AxiosError) => {
        return err;
      });
  },
  getDetailTeller: async (id: string) => {
    console.log("adminService getDetailTeller", id);
    return await appAxios
      .get(`customers/admin/detail/${id}`)
      .then((res: AxiosResponse) => {
        return res;
      })
      .catch((err: AxiosError) => {
        return err;
      });
  },
  addTeller: async (entity: object) => {
    console.log("service over", entity);
    return await appAxios
      .post("/customers/admin/add", entity)
      .then((res: AxiosResponse) => {
        // console.log('ser',res);
        return res;
      })
      .catch((err: AxiosError) => {
        return err;
      });
  },
  editTellter: async (id: string, entity: object) => {
    console.log("edit teller service", id, entity);
    return await appAxios
      .post(`/customers/admin/edit/${id}`, entity)
      .then((res: AxiosResponse) => {
        // console.log('ser',res);
        return res;
      })
      .catch((err: AxiosError) => {
        return err;
      });
  },
  deleteTellter: async (id: string) => {
    console.log("delete teller service", id);
    return await appAxios
      .post(`customers/admin/delete/${id}`)
      .then((res: AxiosResponse) => {
        // console.log('seSr',res);
        return res;
      })
      .catch((err: AxiosError) => {
        return err;
      });
  },
};
