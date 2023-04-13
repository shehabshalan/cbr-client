import { useMutation, useQueryClient } from "react-query";
import { request } from "../utils/request";

export const useCreateCase = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async (payload) => {
      await request.post("/cases/create", payload);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("cases");
      },
    }
  );
};
