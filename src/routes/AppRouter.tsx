import { QueryClient, QueryClientProvider } from "react-query";

// Layouts
import { HomeLayout, MainLayout } from "@layouts/index";
import AuthLayout from "../layouts/AuthLayout";
// Pages
import Login from "@pages/Login";

import Companies from "@pages/Companies";
import CompanyPage from "@pages/CompanyPage";

// Router Functions
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddUser from "../pages/AddUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <p>Error</p>,
    children: [
      {
        index: true,
        element: <HomeLayout />,
      },
      {
        path: "/companies",
        element: <Companies />,
      },

      {
        path: "/companies/:companyId",
        element: <CompanyPage />,
      },
      {
        path: "/adduser",
        element: <AddUser />,
      },
    ],
  },
  {
    path: "/",
    element: <AuthLayout />,
    errorElement: <p>Error</p>,
    children: [
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);

const queryClient = new QueryClient();
const AppRouter = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

export default AppRouter;
