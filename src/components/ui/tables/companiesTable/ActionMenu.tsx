import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import { MoreHorizontal } from "lucide-react";
import { FaLocationDot, FaPhone, FaEarthAfrica } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
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
import { Ijobs } from "@interfaces/index";

import useDeleteCompany from "@/src/hooks/useDeleteCompany";
import { useQueryClient } from "react-query";
import useGetCompanyById from "@/src/hooks/useGetCompanyById";
import SkeletonDemo from "@/src/components/common/SkeletonDemo";

const ActionsMenu: React.FC<{ detail: data }> = ({ detail }) => {
  const { data: jopsData, isLoading } = useGetCompanyById(detail.id);
  const queryClient = useQueryClient();
  const { mutate: deleteCompany } = useDeleteCompany();
  const MySwal = withReactContent(Swal);

  const showModal = () => {
    MySwal.fire({
      title: "Details",
      html: (
        <div className="py-12 container mx-auto bg-gradient-to-r from-blue-100 to-purple-100">
          <div className="flex flex-wrap gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full md:w-[30%] flex justify-center items-center">
              <img
                src={detail.logo}
                alt={`${detail.name} logo`}
                className="rounded-lg shadow-md"
              />
            </div>

            <div className="flex flex-col gap-6 w-full md:w-[65%]">
              <div className="flex flex-col">
                <p className="font-extrabold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                  {detail.name}
                </p>
                <hr className="w-[30%] border-t-4 border-blue-500 my-4 mx-auto" />

                <div className="mt-4">
                  <span className="inline-block bg-gradient-to-r from-sky-800 to-blue-900 text-white rounded-full px-4 py-2 text-sm font-semibold">
                    {detail.industry}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex gap-2 items-center">
                  <FaLocationDot className="text-blue-500" />
                  <p className="text-gray-700">{detail.address}</p>
                </div>
                <div className="flex gap-2 items-center">
                  <MdEmail className="text-blue-500" />
                  <p className="text-gray-700">{detail.email}</p>
                </div>
                <div className="flex gap-2 items-center">
                  <FaPhone className="text-blue-500" />
                  <p className="text-gray-700">
                    {detail.phone || "Phone number not available"}
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <FaEarthAfrica className="text-blue-500" />
                  <a
                    href={detail.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-blue-700 transition-colors duration-300"
                  >
                    Visit our website
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="font-extrabold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              Description
            </h2>
            <hr className="w-[30%] border-t-4 border-blue-500 my-4 mx-auto" />
            <p className="mt-4 text-lg text-gray-600">{detail.description}</p>
          </div>

          <div className="mt-8">
            <h2 className="font-extrabold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 ">
              Our Jobs
            </h2>
            <hr className="w-[30%] border-t-4 border-blue-500 my-4 mx-auto" />
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
              {isLoading ? (
                <SkeletonDemo />
              ) : (
                jopsData!.jobs!.map((job: Ijobs, index: number) => (
                  <div
                    key={index}
                    className="border-primary border py-8 px-10 rounded-lg shadow-md relative"
                  >
                    <span className="inline-block bg-gradient-to-r from-sky-800 to-blue-900 text-white rounded-md px-4 py-2 text-sm font-semibold absolute top-[-14px] left-1/2 transform -translate-x-1/2">
                      {job.field}
                    </span>
                    <div className="flex items-center mb-4">
                      <img
                        src={job.logo}
                        alt={`${job.name} logo`}
                        className="rounded-lg shadow-md"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <h2 className="font-extrabold text-lg">{job.name}</h2>
                      <div className="flex gap-2 items-center">
                        <MdEmail className="text-blue-500" />
                        <p className="text-gray-700">{job.contact_email}</p>
                      </div>
                      <div className="flex gap-2 items-center">
                        <FaPhone className="text-blue-500" />
                        <p className="text-gray-700">
                          {job.contact_phone || "Phone number not available"}
                        </p>
                      </div>
                      <div>
                        <span className="font-bold text-gray-700">
                          Job Description:
                        </span>
                        <p className="text-gray-600">{job.description}</p>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      ),
      showCloseButton: true,
      width: "80%",
      padding: "20px",
    });
  };

  const handleDelete = () => {
    deleteCompany(detail.id, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["companies"] });
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
