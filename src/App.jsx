import "bootstrap/dist/css/bootstrap.min.css";

import About from "./Pages/About/About";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Menu from "./Pages/CAFENNAMenu/Menu";
import Reservation from "./Pages/Reservation/Reservation";
import RecentBlog from "./Pages/RecentBlog/RecentBlog";
import OurChefs from "./Pages/OurChefs/OurChefs";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import CafenaProduct from "./Pages/CafenaProduct/CafenaProduct";
import CaffenaCart from "./Pages/CaffenaCart/CaffenaCart";
import CaffenaCheckOut from "./Pages/CaffenaCheckOut/CaffenaCheckOut";
import Contact from "./Pages/Contact/Contact";
import Orders from "./Pages/orders/orders";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "About",
    element: <About />,
  },
  {
    path: "Menu",
    element: <Menu />,
  },
  {
    path: "Reservation",
    element: <Reservation />,
  },
  {
    path: "RecentBlog",
    element: <RecentBlog />,
  },
  {
    path: "OurChefs",
    element: <OurChefs />,
  },
  {
    path: "CafenaProduct",
    element: <CafenaProduct />,
  },
  {
    path: "ProductDetails/:ProductId",
    element: <ProductDetails />,
  },
  {
    path: "CaffenaCart",
    element: <CaffenaCart />,
  },
  {
    path: "CaffenaCheckOut",
    element: <CaffenaCheckOut />,
  },
  {
    path: "Orders",
    element: <Orders />,
  },
  {
    path: "Contact",
    element: <Contact />,
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
