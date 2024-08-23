import { useQuery } from "react-query";
import { ICompany } from "@interfaces/index";

const useGetCompanyById = (companyId: number) => {
  return useQuery<ICompany | null>(["company", companyId], async () => {
    const response = await fetch(
      `https://ncodenfun.frevva.com/api/companies/${companyId}/info`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  });
};

export default useGetCompanyById;
