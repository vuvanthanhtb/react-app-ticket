import { lazy, Suspense, memo } from "react";
import { Routes, Route } from "react-router-dom";

const LoginShell = lazy(() => import("modules/login/shell/module.routes"));
const TicketShell = lazy(() =>
  import("modules/ticket-booking/shell/module.routes")
);
const NotFound = lazy(() => import("./not-found.component"));
const FullPageLoading = lazy(() => import("./full-page-loading.component"));

const AppRoutes = memo(() => {
  return (
    <Suspense fallback={<FullPageLoading />}>
      <Routes>
        <Route path="/login/*" element={<LoginShell />} />
        <Route path="/ticket/*" element={<TicketShell />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
});

export default AppRoutes;
