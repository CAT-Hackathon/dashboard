
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@components/ui/card";
import RenderUsers from "../tables/usersTable/RenderUsers";
import RenderAdmin from "../tables/adminTable/RenderAdmin";
import useGetAllUsers from "../hooks/useGetAllUsers";
import useGetAllAdmin from "../hooks/useGetAllAdmin";
import SkeletonDemo from "@components/common/SkeletonDemo";
import { Link } from "react-router-dom";
import Stats from "@components/Dashboard/Stats";

const MainLayout = () => {
  const { isLoading: loadingUsers } = useGetAllUsers();
  const { isLoading: loadingAdmin } = useGetAllAdmin();

  return (
    <div>
      <Stats />
      <div className="flex min-h-screen w-full flex-col">
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
          
          <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
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
            <Card x-chunk="dashboard-01-chunk-5">
              <CardHeader className="flex flex-col justify-between items-center">
                <CardTitle className="w-fit">Admins</CardTitle>
                <Link
                  to="/adduser"
                  className="text-lg font-medium bg-slate-700 text-white rounded-lg px-4 py-2"
                >
                  Add user
                </Link>
              </CardHeader>
              <CardContent className="grid gap-8">
                {loadingAdmin ? <SkeletonDemo /> : <RenderAdmin />}
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
