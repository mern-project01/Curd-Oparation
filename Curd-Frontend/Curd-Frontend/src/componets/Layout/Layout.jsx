import { createBrowserRouter } from "react-router";
import Add_Curd from "../pages/Add-Curd/Add_Curd";
import Curd from "../pages/Curd/Curd";
import Main from "../Share/Main/Main";
import Login from './../pages/Login/Login';
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/curd",
        element: <Curd></Curd>,
      },
      {
        path: "/add-curd",
        element: <Add_Curd></Add_Curd>,
      },
    ],
  },
]);
export default router
