import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import { MoreHorizontal } from "lucide-react";

import { Button } from "@components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@components/ui/dropdown-menu";
import { data } from "./Columns";
import useDeleteUser from "@/src/hooks/useDeleteUser";
import { useQueryClient } from "react-query";
const ActionsMenu: React.FC<{ detail: data }> = ({ detail }) => {
  const queryClient = useQueryClient();
  const { mutate: deleteUser } = useDeleteUser();

  const MySwal = withReactContent(Swal);

  const showModal = () => {
    MySwal.fire({
      title: "Details",
      html: (
        <div>
          <p className="mb-2">
            <span className="text-slate-800">ID : </span> {detail.id}
          </p>
          <p className="mb-2">
            <span className="text-slate-800">name : </span>
            {detail.name}
          </p>
          <p className="mb-2">
            <span className="text-slate-800">phone : </span>
            {detail.phone}
          </p>
          <p className="mb-2">
            <span className="text-slate-800">email : </span>
            {detail.email}
          </p>
        </div>
      ),
      showCloseButton: true,
    });
  };

  const handleDelete = () => {
    deleteUser(detail.id, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["users"] });
      },
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Choose</DropdownMenuLabel>

        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleDelete}>Delete</DropdownMenuItem>
        <DropdownMenuItem onClick={showModal}>Details</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default ActionsMenu;
