import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AppLayout from "./layout/AppLayout";
import Landing from "./pages/Landing";
import AuthCation from "./pages/AuthCation";
import DashBoard from "./pages/Dashboard";
import Link from "./pages/Link";
import RedirectUrl from "./pages/RedirectUrl";


const router = createBrowserRouter(
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/auth",
        element: <AuthCation />,
      },
      {
        path: "/dashboard",
        element: <DashBoard />,
      },
      {
        path:"/link/:id",
        element: <Link />,
      },
      {
        path: "/:id",
        element: <RedirectUrl />,
      }

    ],
  }
);
function App() {

  return <div>jksbfiwe</div>
}
export default App
