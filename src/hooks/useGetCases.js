import { useQuery } from "react-query";
import { request } from "../utils/request";

export const useGetCases = () => {
  return useQuery(["cases"], async () => {
    const { data } = await request.get("/cases");
    return data.data;
  });
};
