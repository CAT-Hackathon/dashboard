import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";
import RenderAdmin from "@components/ui/tables/adminTable/RenderAdmin";
import useGetAllAdmin from "@hooks/useGetAllAdmin";
import SkeletonDemo from "@components/common/SkeletonDemo";
import { Link } from "react-router-dom";
const AllAdmins = () => {
  const { isLoading: loadingAdmin } = useGetAllAdmin();

  return (
    <Card x-chunk="dashboard-01-chunk-5">
      <CardHeader className="flex flex-col justify-between items-center">
        <CardTitle className="w-fit">Admins</CardTitle>
        <Link
          to="/adduser"
          className="text-lg font-medium bg-slate-700 text-white rounded-lg px-4 py-2"
        >
          Add Admin
        </Link>
      </CardHeader>
      <CardContent className="grid gap-8">
        {loadingAdmin ? <SkeletonDemo /> : <RenderAdmin />}
      </CardContent>
    </Card>
  );
};

export default AllAdmins;
