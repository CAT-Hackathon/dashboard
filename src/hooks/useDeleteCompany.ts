import { useMutation } from "react-query";
import { decrypt } from "../utils/Utilty";

const useDeleteCompany = () => {
  const token = localStorage.getItem("token") || "";

  return useMutation({
    mutationFn: (id: string) =>
      fetch(`https://ncodenfun.frevva.com/api/company/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${decrypt(
            token,
            import.meta.env.VITE_TOKEN_SECRET
          )}`,
        },
      }).then((response) => response.json()),
  });
};

export default useDeleteCompany;
