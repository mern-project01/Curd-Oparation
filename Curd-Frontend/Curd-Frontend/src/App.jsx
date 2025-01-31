
import { createBrowserRouter, RouterProvider } from 'react-router';
import './App.css'
import Main from './componets/component/Main/Main';
import Home from './componets/pages/Home/Home';
import Login from './componets/pages/Login/Login';
import Curd from './componets/pages/Curd/Curd';
import Add_Curd from './componets/pages/Add-Curd/Add_Curd';
// const router = createBrowserRouter([{
//   path: '/',
//   element: <Main></Main>,
// }])
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

function App() {

  return <RouterProvider router={router} ></RouterProvider>
}

export default App
