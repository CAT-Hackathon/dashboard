import useGetAllUsers from "@/src/hooks/useGetAllUsers";
import { columns } from "./Columns";
import { DataTable } from "./DataTable";

const RenderUsers = () => {
  const { data, isLoading } = useGetAllUsers();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  console.log(data);

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data!} />
    </div>
  );
};
export default RenderUsers;
