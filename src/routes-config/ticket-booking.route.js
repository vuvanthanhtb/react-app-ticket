export const ticketBookingRoutes = {
  search: {
    path: "/search",
    roles: ["admin", "user"],
  },
  create: {
    path: "/create",
    roles: ["admin"],
  },
  update: {
    path: "/update",
    roles: ["admin"],
  },
  delete: {
    path: "/delete",
    roles: ["admin"],
  },
};
