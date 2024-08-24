import useGetAllAdmin from "@/src/hooks/useGetAllAdmin";
import { columns } from "./Columns";
import { DataTable } from "./DataTable";

const RenderAdmin = () => {
  const { data, isLoading } = useGetAllAdmin();
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data!} />
    </div>
  );
};
export default RenderAdmin;
