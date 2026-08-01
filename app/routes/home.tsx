import type { Route } from "./+types/home";
import { Welcome } from "../components/welcome";
import { env } from 'cloudflare:workers';
import { useLoaderData } from "react-router";

const rootMiddleware = async ({ request, url, params, pattern, context }: Route.LoaderArgs, next: Function) => {
	console.log(`>>> '${pattern}' middleware running!`);

	const response = await next();
	return response;
}

export const middleware: Route.MiddlewareFunction[] = [
	rootMiddleware
];

async function timingMiddleware({ url }: Route.LoaderArgs, next: Function) {
	const start = performance.now();
	await next();
	const duration = performance.now() - start;
	console.log(`Navigation to '${url}' took ${duration}ms`);
}

export const clientMiddleware: Route.ClientMiddlewareFunction[] = [
	timingMiddleware
];

export function meta({ }: Route.MetaArgs) {
	return [
		{ title: "New React Router App" },
		{ name: "description", content: "Welcome to React Router!" },
	];
}

export function loader({ }: Route.LoaderArgs) {
	return { message: env.PUBLIC_ENVIRONMENT };
}

export default function Home() {
	const loaderData = useLoaderData();

	return <Welcome message={loaderData.message} />;
}
