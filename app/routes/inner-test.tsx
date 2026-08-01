import { useLoaderData } from "react-router";

export default function Test() {
  const loaderData = useLoaderData();
  console.log(`loaderData:`, loaderData);

  return <div>... inner-test</div>;
}
