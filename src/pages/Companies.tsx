import Card from "@/src/components/common/Card";
import useGetCompanies from "@hooks/useGetCompanies";
import companysection from "@assets/svg/companysection.svg";
import Hero from "@components/common/Hero";
const Companies = () => {
  const { data, isLoading } = useGetCompanies();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Hero
        title={"Companies"}
        img={companysection}
        text={
          "We help students and recent graduates secure their first software engineering job by providing personalized learning paths and comprehensive support"
        }
      />
      <div className="my-10">
        <h1 className="text-4xl font-bold text-center mb-6 text-blue-400">
          Companies
        </h1>
        <div className="flex flex-wrap justify-center">
          {data!.map((companyData) => (
            <Card key={companyData.id} {...companyData} />
          ))}
        </div>
      </div>
    </>
  );
};
export default Companies;
