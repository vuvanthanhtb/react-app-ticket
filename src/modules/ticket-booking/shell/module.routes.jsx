import { lazy, memo } from "react";
import { Routes, Route } from "react-router-dom";
import PrivateLayout from "layout/private.layout";
import ROUTES_CONFIG from "./route.config";

const SearchTicketPage = lazy(() => import("../pages/search"));

const TicketRoutes = memo((props) => {
  console.log("TicketRoutes initialized");

  return (
    <Routes>
      <Route
        path={ROUTES_CONFIG.search.path}
        element={
          <PrivateLayout allowedRoles={ROUTES_CONFIG.search.roles}>
            <SearchTicketPage props={props} />
          </PrivateLayout>
        }
      />
    </Routes>
  );
});

export default TicketRoutes;
