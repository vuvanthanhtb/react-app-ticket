const ROUTES_CONFIG = {
  search: {
    path: "/search",
    roles: ["admin", "user"],
  },
  create: {
    path: "/create",
    roles: ["admin"],
  }
}

export default ROUTES_CONFIG;
