import { ColumnDef } from "@tanstack/react-table";
import ActionsMenu from "./ActionMenu";

export type data = {
  id: string;
  name: string;
  email: string;
  phone: string;
  image_link: string;
};

export const columns: ColumnDef<data>[] = [
  {
    accessorKey: "id",
    header: () => <div className="text-left">Id</div>,
  },
  {
    accessorKey: "name",
    header: () => <div className="text-left">Name</div>,
  },

  {
    id: "actions",
    cell: ({ row }) => {
      const detail = row.original;
      return <ActionsMenu detail={detail} />;
    },
  },
];
