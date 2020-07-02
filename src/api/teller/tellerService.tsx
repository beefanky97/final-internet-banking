import { AxiosResponse, AxiosError } from "axios";

import { appAxios } from '../appAxios';

export const tellerService = {
    showAllCustomers: async () => {
        return await appAxios
            .get("/customers/teller")
            .then((res: AxiosResponse) => {
                return res;
            })
            .catch((err: AxiosError) => {
                return err;
            })
    },
    addCustomer: async (entity: object) => {
        return await appAxios
            .post("/customers/teller/add", entity)
            .then((res: AxiosResponse) => {
                console.log('ser',res);
                return res;
            })
            .catch((err: AxiosError) => {
                return err;
            })
    },
};