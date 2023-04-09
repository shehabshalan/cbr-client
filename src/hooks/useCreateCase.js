import { useMutation } from "react-query";
import { request } from "../utils/request";

export const useCreateCase = () => {
  return useMutation(
    async (payload) => await request.post("/cases/create", payload)
  );
};
