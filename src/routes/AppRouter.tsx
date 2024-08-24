import { QueryClient, QueryClientProvider } from "react-query";

// Layouts
import { MainLayout } from "@layouts/index";
// Pages
import Login from "@pages/Login";

// Router Functions
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddUser from "../pages/AddUser";
import AddCompany from "../pages/AddCompany";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <p>Error</p>,
  },
  {
    path: "/adduser",
    element: <AddUser />,
  },
  {
    path: "/addcompany",
    element: <AddCompany />,
  },
  {
    path: "/",
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
