import useGetCompanyById from "@hooks/useGetCompanyById";
import { useParams } from "react-router-dom";
import { FaLocationDot, FaPhone, FaEarthAfrica } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Ijobs } from "@interfaces/index";
const CompanyPage = () => {
  const { companyId } = useParams<{ companyId: string }>();
  const { data, isLoading } = useGetCompanyById(Number(companyId));

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data || !data.company || data.jobs.length === 0) {
    return <div>No company data available.</div>;
  }

  console.log(data);

  return (
    <div className="pt-[88px] container mx-auto">
      <div className="flex sm:flex-row flex-col gap-8">
        <div className="bg-slate-200 p-8 rounded-md sm:w-full md:w-[50%] lg:w-[30%] w-full flex justify-center items-center">
          <img src={data.company.logo} alt={`${data.company.name} logo`} />
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <p className="font-bold text-[1.5rem] uppercase">
              {data.company.name}
            </p>
            <hr className="w-[50%] border-t-2 border-primary" />

            <div className="mt-4">
              <span className="inline-block bg-gradient-to-r from-sky-800 to-blue-900 text-white rounded-full px-3 py-1 text-sm font-semibold">
                {data.company.industry}
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex gap-2 items-center">
              <FaLocationDot />
              <p>{data.company.address}</p>
            </div>

            <div className="flex gap-2 items-center">
              <MdEmail />
              <p>{data.company.email}</p>
            </div>

            <div className="flex gap-2 items-center">
              <FaPhone />
              <p>{data.company.phone || "Phone number not available"}</p>
            </div>

            <div className="flex gap-2 items-center">
              <FaEarthAfrica />
              <a
                href={data.company.website}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-primary"
              >
                Visit our website
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-6">
        <div className="w-fit">
          <h2 className="font-bold text-[1.5rem] uppercase">Description</h2>
          <hr className="w-[50%] border-t-2 border-primary" />
        </div>

        <p className="mt-3 font-medium">{data.company.description}</p>
      </div>

      <div className="mt-6">
        <div className="w-fit">
          <h2 className="font-bold text-[1.5rem] uppercase">Our Jobs</h2>
          <hr className="w-[50%] border-t-2 border-primary" />
        </div>

        <div className="grid sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 grid-cols-1 sm:gap-4 md:gap-6 lg:gap-4 gap-6 my-6">
          {data.jobs.map((job: Ijobs, index: number) => (
            <div
              key={index}
              className="border-primary border py-6 px-9 rounded-md flex gap-6 relative"
            >
              <span className="inline-block bg-gradient-to-r from-sky-800 to-blue-900 text-white rounded-md px-3 py-1 text-sm font-semibold absolute top-[-14px] left-1/2 translate-x-[-50%]">
                {job.field}
              </span>
              <div className="flex items-center">
                <img src={job.logo} alt={`${job.name} logo`} className="object-contain"/>
              </div>
              <div className="flex flex-col justify-between gap-1">
                <h2 className="font-bold">{job.name}</h2>

                <div className="flex flex-col gap-1">
                  <div className="flex gap-2 items-center">
                    <MdEmail />
                    <p>{data.company.email}</p>
                  </div>

                  <div className="flex gap-2 items-center">
                    <FaPhone />
                    <p>{data.company.phone || "Phone number not available"}</p>
                  </div>
                </div>

                <div>
                  <span className="font-bold">Job Description:</span>
                  <p>{job.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyPage;
