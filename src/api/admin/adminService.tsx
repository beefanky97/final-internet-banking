import { AxiosResponse, AxiosError } from "axios";

import { appAxios } from 'src/api/appAxios';

export const adminService = {
    showAllTransactions: async () => {
        console.log('adminService showAllTransactions');
        
        return await appAxios
            .get("/transactions/admin")
            .then((res: AxiosResponse) => {
                console.log(res);
                return res;
            })
            .catch((err: AxiosError) => {
                console.log(err);
                return err;
            })
    },
    getDetailTransaction: async (id: string) => {
        console.log('adminService getDetailTransaction', id);
        return await appAxios
        .get(`/transactions/detail/${id}`)
        .then((res: AxiosResponse) => {
            return res.data;
        })
        .catch((err: AxiosError) => {
            return err;
        })
    }
};