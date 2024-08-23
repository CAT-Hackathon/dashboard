import Nav from "@/src/components/common/Nav";
import { Users } from "lucide-react";
import { BiSolidBuildingHouse } from "react-icons/bi";
import { GrUserAdmin } from "react-icons/gr";
import { Button } from "@components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@components/ui/card";
import RenderUsers from "../tables/usersTable/RenderUsers";
import RenderAdmin from "../tables/adminTable/RenderAdmin";
import useGetCompanies from "../hooks/useGetCompanies";
import useGetAllUsers from "../hooks/useGetAllUsers";
import useGetAllAdmin from "../hooks/useGetAllAdmin";
import SkeletonDemo from "@components/common/SkeletonDemo";
import { Link } from "react-router-dom";

const MainLayout = () => {
  const { data: companiesData, isLoading: loadingCompanies } =
    useGetCompanies();
  const { data: usersData, isLoading: loadingUsers } = useGetAllUsers();
  const { data: dataAdmin, isLoading: loadingAdmin } = useGetAllAdmin();

  return (
    <div>
      <div className="flex min-h-screen w-full flex-col">
        {/* <Nav /> */}
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
          <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
            <Card x-chunk="dashboard-01-chunk-0">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-medium">Admins</CardTitle>
                <GrUserAdmin className="h-6 w-6 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                {loadingAdmin ? (
                  <SkeletonDemo />
                ) : (
                  <div className="text-2xl font-bold">{dataAdmin?.length}</div>
                )}
              </CardContent>
            </Card>
            <Card x-chunk="dashboard-01-chunk-1">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-medium">Users</CardTitle>
                <Users className="h-6 w-6 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {loadingUsers ? (
                    <SkeletonDemo />
                  ) : (
                    <div className="text-2xl font-bold">
                      {usersData?.length}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
            <Card x-chunk="dashboard-01-chunk-2">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-medium">Companies</CardTitle>
                <BiSolidBuildingHouse className="h-6 w-6 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {loadingCompanies ? (
                    <SkeletonDemo />
                  ) : (
                    <div className="text-2xl font-bold">
                      {companiesData?.length}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
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
