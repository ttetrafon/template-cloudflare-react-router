import type { Route } from "./+types/home";
import { Welcome } from "../components/welcome";
import { env } from 'cloudflare:workers';

export function meta({ }: Route.MetaArgs) {
	return [
		{ title: "New React Router App" },
		{ name: "description", content: "Welcome to React Router!" },
	];
}

export function loader({ context }: Route.LoaderArgs) {
	return { message: env.PUBLIC_ENVIRONMENT };
}

export default function Home({ loaderData }: Route.ComponentProps) {
	return <Welcome message={loaderData.message} />;
}
