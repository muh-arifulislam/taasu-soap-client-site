import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../pages/home/Home";
import App from "../App";
import Shop from "../pages/shop/Shop";
import Contact from "../pages/contact/Contact";
import ProductDetails from "../pages/shop/[productId]";
import Checkout from "../pages/checkout/Checkout";
import DashboardLayout from "../layout/dashboard/DashboardLayout";
import MyOrders from "../pages/dashboard/MyOrders";
import MyProfile from "../pages/dashboard/MyProfile";
import MyReviews from "../pages/dashboard/MyReviews";
import Cart from "../pages/cart/Cart";
import Blog from "../pages/blog/Blog";
import Payment from "../pages/payment/Payment";
import Login from "../pages/auth/Login";
import SignUp from "../pages/auth/SignUp";
import ProtectedAuth from "../middlewares/ProtectedAuth";
import MyWishlists from "../pages/dashboard/MyWishlists";
import ManageAddresses from "../pages/dashboard/ManageAddresses";
import Notifications from "../pages/dashboard/Notifications";
import Settings from "../pages/dashboard/Settings";
import OrderTrack from "../pages/orderTrack/OrderTrack";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/shop/:productId",
        element: <ProductDetails />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/ordertrack",
        element: <OrderTrack />,
      },
      {
        path: "/checkout",
        element: (
          <ProtectedAuth>
            <Checkout />
          </ProtectedAuth>
        ),
      },
      {
        path: "/payment",
        element: (
          <ProtectedAuth>
            <Payment />
          </ProtectedAuth>
        ),
      },
      {
        path: "/blogs",
        element: <Blog />,
      },
      {
        path: "/my-section",
        element: (
          <ProtectedAuth>
            <DashboardLayout />
          </ProtectedAuth>
        ),
        children: [
          {
            path: "",
            element: <Navigate to={"profile"} />,
          },
          {
            path: "profile",
            element: <MyProfile />,
          },
          {
            path: "orders",
            element: <MyOrders />,
          },
          {
            path: "reviews",
            element: <MyReviews />,
          },
          {
            path: "wishlists",
            element: <MyWishlists />,
          },
          {
            path: "addresses",
            element: <ManageAddresses />,
          },
          {
            path: "notifications",
            element: <Notifications />,
          },
          {
            path: "settings",
            element: <Settings />,
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);

export default router;
