import { useQuery } from "react-query";
import { decrypt } from "@/src/utils/Utilty";
import { users } from "@/src/interfaces/index";
function useGetAllUsers() {
  return useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const token = localStorage.getItem("token") || "";
      const res = await fetch(
        "https://ncodenfun.frevva.com/api/admin/get-all-users",
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
      return data.users as users[];
    },
  });
}
export default useGetAllUsers;
