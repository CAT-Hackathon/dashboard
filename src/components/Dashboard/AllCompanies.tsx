import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";
import RenderCompanies from "@components/ui/tables/companiesTable/RenderCompanies";
import useGetCompanies from "@hooks/useGetCompanies";
import SkeletonDemo from "@components/common/SkeletonDemo";
import { Link } from "react-router-dom";
const AllCompanies = () => {
  const { isLoading: loadingCompany } = useGetCompanies();

  return (
    <Card x-chunk="dashboard-01-chunk-5">
      <CardHeader className="flex flex-col justify-between items-center">
        <CardTitle className="w-fit">Companies</CardTitle>
        <Link
          to="/addcompany"
          className="text-lg font-medium bg-slate-700 text-white rounded-lg px-4 py-2"
        >
          Add Company
        </Link>
      </CardHeader>
      <CardContent className="grid gap-8">
        {loadingCompany ? <SkeletonDemo /> : <RenderCompanies />}
      </CardContent>
    </Card>
  );
};

export default AllCompanies;
