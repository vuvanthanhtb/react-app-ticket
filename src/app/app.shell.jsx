import React, { useEffect } from "react";
import { BrowserRouter, Outlet } from "react-router-dom";
import BootStrapper from "./boot-strapper";
import AppRoutes from "./app.router";

const App = () => {
  useEffect(() => {
    BootStrapper.initialize();
    BootStrapper.setDataToRunApplicationInLocal();
  }, []);

  return (
    <BrowserRouter>
      <AppRoutes />
      <Outlet />
    </BrowserRouter>
  );
};

export default App;
