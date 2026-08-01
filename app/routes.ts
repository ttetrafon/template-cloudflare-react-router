import { type RouteConfig, index, prefix, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  ...prefix("test", [
    index("routes/test.tsx"),
    route("/inner-test", "routes/inner-test.tsx"),
  ]),
] satisfies RouteConfig;
