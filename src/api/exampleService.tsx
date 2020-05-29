import { appAxios } from "./appAxios";

export const exampleService = {
  getAllPost: async () => {
    return await appAxios
      .get("/posts")
      .then((res: any) => {
        console.log("respone", res.data);
        return res.data;
      })
      .catch((err: any) => {
        console.log(err);
      });
  },
};
