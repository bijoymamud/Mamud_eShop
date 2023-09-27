import {
  createBrowserRouter
} from "react-router-dom";
import Main from "../Layout/Main";
import Contact from "../Pages/Contact/Contact";
import About from "../Pages/Home/About/About";
import Home from "../Pages/Home/HomePage/Home";
import ProductDetails from "../Pages/Home/ProductDetails/ProductDetails";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Registration />
      },
      {
        path: '/productDetails/:id',
        element: <ProductDetails />,
        // children: [
        //   {
        //     path: ':id',
        //     element: <ProductDetails />,
        //     loader: ({ params }) => fetch(`/public//Features_Products.json/productDetails/${params.id}`)
        //   }
        // ]

      }
    ]
  },
]);