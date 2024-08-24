import { useQuery } from "react-query";
import { decrypt } from "@/src/utils/Utilty";
import { users } from "@/src/interfaces/index";
import { useNavigate } from "react-router-dom";

function useGetAllUsers() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token") || "";
  console.log(token);

  if (token == "") {
    console.log("d");

    navigate("/login");
  }
  return useQuery({
    queryKey: ["users"],
    queryFn: async () => {
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
