import { useQuery } from "react-query";
import { decrypt } from "@/src/utils/Utilty";
import { Icompanies } from "@/src/interfaces/index";
function useGetCompanies() {
  return useQuery({
    queryKey: ["companies"],
    queryFn: async () => {
      const token = localStorage.getItem("token") || "";
      const res = await fetch("https://ncodenfun.frevva.com/api/companies", {
        headers: {
          authorization: `Bearer ${decrypt(
            token,
            import.meta.env.VITE_TOKEN_SECRET
          )}`,
        },
      });
      const data = await res.json();
      return data.companies as Icompanies[];
    },
  });
}
export default useGetCompanies;
