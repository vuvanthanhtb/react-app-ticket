import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import PrivateLayout from "layout/private.layout";
import { ticketBookingRoutes } from "routesConfig";
import { useStore } from "react-redux";
import ticketBookingReducer from "../redux/ticket-booking.slice";
import injectReducer from "utils/inject-reducer";

const SearchTicketPage = lazy(() => import("../pages/search"));

const TicketRoutes = (props) => {
  const store = useStore();
  injectReducer(store, "ticketBooking", ticketBookingReducer);

  return (
    <Routes>
      <Route
        path={ticketBookingRoutes.search.path}
        element={
          <PrivateLayout allowedRoles={ticketBookingRoutes.search.roles}>
            <SearchTicketPage props={props} />
          </PrivateLayout>
        }
      />
    </Routes>
  );
};

export default TicketRoutes;
