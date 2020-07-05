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
        console.log("service over", entity);
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
    showDetailCustomer: async (_id: string) => {
        return await appAxios
            .get(`/customers/teller/detail/${_id}`)
            .then((res: AxiosResponse) => {
                console.log('res', res);
                return res;
            })
            .catch((err: AxiosError) => {
                console.log('err', err);
                return err;
            })
    },
    showInfoCards: async (_id_customer: string) => {
        return await appAxios
            .get(`/customers/teller/cards/${_id_customer}`)
            .then((res: AxiosResponse) => {
                console.log('res', res);
                return res;
            })
            .catch((err: AxiosError) => {
                console.log('err', err);
                return err;
            })
    },
};