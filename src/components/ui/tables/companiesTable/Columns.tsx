import { ColumnDef } from "@tanstack/react-table";
import ActionsMenu from "./ActionMenu";

export type data = {
  id: string;
  name: string;
  description: string;
  logo: string;
  phone: string;
  address: string;
  website: string;
  industry: string;
  email: string;
};

export const columns: ColumnDef<data>[] = [
  {
    accessorKey: "name",
    header: () => <div className="text-left">name</div>,
  },
  {
    accessorKey: "industry",
    header: () => <div className="text-left">industry</div>,
  },
  {
    accessorKey: "description",
    header: () => <div className="text-left">description</div>,
  },

  {
    id: "actions",
    cell: ({ row }) => {
      const detail = row.original;
      return <ActionsMenu detail={detail} />;
    },
  },
];
