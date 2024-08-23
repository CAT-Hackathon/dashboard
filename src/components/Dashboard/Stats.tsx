import { Users } from "lucide-react";
import { BiSolidBuildingHouse } from "react-icons/bi";
import { GrUserAdmin } from "react-icons/gr";
import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";
import SkeletonDemo from "@components/common/SkeletonDemo";
import useGetCompanies from "@hooks/useGetCompanies";
import useGetAllUsers from "@hooks/useGetAllUsers";
import useGetAllAdmin from "@hooks/useGetAllAdmin";
const Stats = () => {
  const { data: companiesData, isLoading: loadingCompanies } = useGetCompanies();
  const { data: usersData, isLoading: loadingUsers } = useGetAllUsers();
  const { data: dataAdmin, isLoading: loadingAdmin } = useGetAllAdmin();
  return (
    <div className="container mx-auto grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
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
              <div className="text-2xl font-bold">{usersData?.length}</div>
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
              <div className="text-2xl font-bold">{companiesData?.length}</div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Stats;
