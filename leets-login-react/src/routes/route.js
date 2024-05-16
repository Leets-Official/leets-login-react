import { createBrowserRouter } from "react-router-dom";

import HomePage from "../pages/Home/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import AttendPage from "../pages/AttendPage/AttendPage";
import AfterLogin from "../pages/LoginPage/AfterLoginPage";
import JoinPage from "../pages/JoinPage/JoinPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/Join",
    element: <JoinPage />,
  },
  {
    path: "/Attend",
    element: <AttendPage />,
  },
  {
    path: "/AfterLogin",
    element: <AfterLogin />,
  },
]);

export default router;
