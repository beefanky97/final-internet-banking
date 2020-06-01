import { appAxios } from "./appAxios";
import { AxiosResponse, AxiosError } from 'axios';

export const postService = {
  getAllPost: async () => {
    return await appAxios
      .get("/posts")
      .then((res: AxiosResponse) => {
        return res;
      })
      .catch((err: AxiosError) => {
        console.log(err);
      });
  },
};
