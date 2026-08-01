import type { Route } from "./+types/test";
import { Outlet, useLoaderData, useRouteLoaderData } from "react-router";
import { rootMiddleware } from "./home";

export const middleware: Route.MiddlewareFunction[] = [
  rootMiddleware
];

export function loader({ request, url, params, pattern, context }: Route.LoaderArgs) {
  console.log(`>>> '${pattern}' loader running!`);

  return {};
}

export default function Test() {
  const loaderData = useLoaderData();
  console.log(`loaderData:`, loaderData);

  return (
    <>
      <div>... test</div>
    </>
  );
}
