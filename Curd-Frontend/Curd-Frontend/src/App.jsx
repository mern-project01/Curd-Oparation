
import { RouterProvider } from 'react-router';
import './App.css'
import router from './componets/Layout/Layout';
// import Main from './componets/component/Main/Main';
// import Home from './componets/pages/Home/Home';
// import Login from './componets/pages/Login/Login';
// import Curd from './componets/pages/Curd/Curd';
// import Add_Curd from './componets/pages/Add-Curd/Add_Curd';
// import Main from './componets/Share/Main/Main';
// const router = createBrowserRouter([{
//   path: '/',
//   element: <Main></Main>,
// }])


function App() {

  return <RouterProvider router={router} ></RouterProvider>
}

export default App
