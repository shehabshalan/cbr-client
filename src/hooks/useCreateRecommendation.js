import { useMutation } from "react-query";
import { request } from "../utils/request";

export const useCreateRecommendation = () => {
  return useMutation(
    async (payload) => await request.post("/recommendation", payload)
  );
};
