import { lazy, memo } from "react";
import { Routes, Route } from "react-router-dom";
import PrivateLayout from "layout/private.layout";

const SearchTicketPage = lazy(() => import("../pages/search"));

const TicketRoutes = memo((props) => {
  console.log("TicketRoutes initialized");

  return (
    <Routes>
      <Route
        path="/search"
        element={
          <PrivateLayout allowedRoles={["admin", "user"]}>
            <SearchTicketPage props={props} />
          </PrivateLayout>
        }
      />
    </Routes>
  );
});

export default TicketRoutes;
