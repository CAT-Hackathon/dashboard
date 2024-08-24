import { useMutation } from "react-query";
import { addCompany } from "@/src/interfaces/index";
import { decrypt } from "../utils/Utilty";

const useAddCompany = () => {
  const token = localStorage.getItem("token") || "";

  return useMutation({
    mutationFn: (data: addCompany) =>
      fetch("https://ncodenfun.frevva.com/api/company", {
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
          website: data.website,
          name: data.name,
          address: data.address,
          email: data.email,
          description: data.description,
          industry: data.industry,
          logo: data.logo,
        }),
      }).then((response) => response.json()),
  });
};

export default useAddCompany;
