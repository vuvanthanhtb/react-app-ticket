import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
const LoginPage = lazy(() => import("../pages/index"));

const LoginRoutes = (props) => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage props={props} />} />
    </Routes>
  );
};

export default LoginRoutes;
