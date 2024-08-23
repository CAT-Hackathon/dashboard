import { useMutation } from "react-query";
import { addUser } from "@/src/interfaces/index";
import { decrypt } from "../utils/Utilty";

const useAddUser = () => {
  const token = localStorage.getItem("token") || "";

  return useMutation({
    mutationFn: (data: addUser) =>
      fetch("https://ncodenfun.frevva.com/api/admin/create-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${decrypt(
            token,
            import.meta.env.VITE_TOKEN_SECRET
          )}`,
        },
        body: JSON.stringify({
          phone: data.phone,
          password: data.password,
          name: data.name,
          role: data.role,
          email: data.email,
        }),
      }).then((response) => response.json()),
  });
};

export default useAddUser;
