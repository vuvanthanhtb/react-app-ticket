import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import PrivateLayout from "layout/private.layout";
import ROUTES_CONFIG from "./route.config";
import { useStore } from "react-redux";
import ticketBookingReducer from "../redux/ticket-booking.slice";
import injectReducer from "../../../utils/inject-reducer";

const SearchTicketPage = lazy(() => import("../pages/search"));

const TicketRoutes = (props) => {
  const store = useStore();
  // store.reducerManager.add("ticketBooking", ticketBookingReducer)
  // store.replaceReducer(store.reducerManager.reduce);
  injectReducer(store, "ticketBooking", ticketBookingReducer);

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
};

export default TicketRoutes;
