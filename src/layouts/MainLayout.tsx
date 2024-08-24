import Stats from "@components/Dashboard/Stats";
import AllUsers from "@components/Dashboard/AllUsers";
import AllAdmins from "@components/Dashboard/AllAdmins";
import Nav from "@components/common/Nav";
import AllCompanies from "../components/Dashboard/AllCompanies";

const MainLayout = () => {
  return (
    <>
      {/* <Nav /> */}
      <div>
        <Stats />
        <div className="flex min-h-screen w-full flex-col">
          <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
            <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
              <AllUsers />
              <AllAdmins />
            </div>
            <AllCompanies />
          </main>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
