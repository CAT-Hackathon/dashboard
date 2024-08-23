import { useQuery } from "react-query";
import { decrypt } from "@/src/utils/Utilty";
import { admins } from "@/src/interfaces/index";
function useGetAllAdmin() {
  return useQuery({
    queryKey: ["admins"],
    queryFn: async () => {
      const token = localStorage.getItem("token") || "";
      const res = await fetch(
        "https://ncodenfun.frevva.com/api/admin/get-all-admins",
        {
          headers: {
            authorization: `Bearer ${decrypt(
              token,
              import.meta.env.VITE_TOKEN_SECRET
            )}`,
          },
        }
      );
      const data = await res.json();
      console.log(data.admins);
      return data.admins as admins[];
    },
  });
}
export default useGetAllAdmin;
