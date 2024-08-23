import RenderUsers from "@components/ui/tables/usersTable/RenderUsers";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@components/ui/card";
  import SkeletonDemo from "@components/common/SkeletonDemo";
  import { Link } from "react-router-dom";
  import useGetAllUsers from "@hooks/useGetAllUsers";
  

const AllUsers = () => {
  const { isLoading: loadingUsers } = useGetAllUsers();

  return (
    <Card className="xl:col-span-2" x-chunk="dashboard-01-chunk-4">
      <CardHeader className="flex flex-row items-center gap-10">
        <div className="grid gap-2">
          <CardTitle>All users</CardTitle>

          <CardDescription>Show All Users Data</CardDescription>
        </div>
        <Link
          to="/adduser"
          className="text-lg font-medium bg-slate-700 text-white rounded-lg px-4 py-2"
        >
          Add user
        </Link>
      </CardHeader>
      <CardContent>
        {loadingUsers ? <SkeletonDemo /> : <RenderUsers />}
      </CardContent>
    </Card>
  );
};

export default AllUsers;
