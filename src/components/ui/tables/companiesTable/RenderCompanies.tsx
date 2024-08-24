import useGetCompanies from "@/src/hooks/useGetCompanies";
import { columns } from "./Columns";
import { DataTable } from "./DataTable";

const RenderCompanies = () => {
  const { data, isLoading } = useGetCompanies();
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
export default RenderCompanies;
