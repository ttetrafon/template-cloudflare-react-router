import type { Context } from 'react';
import { createRequestHandler, type ServerBuild } from 'react-router';

const requestHandler = createRequestHandler(
	() => import('virtual:react-router/server-build') as Promise<ServerBuild>,
	import.meta.env.MODE,
);

async function handleApiRequest(
	url: URL,
	request: Request,
	env: Env,
): Promise<Response> {
	const path = url.pathname.replace(/^\/api/, '');

	if (path === '/health') {
		return Response.json({ status: 'ok' });
	}

	return Response.json({ error: 'Not found' }, { status: 404 });
}

export default {
	async fetch(request, env, ctx) {
		const url = new URL(request.url);

		if (url.pathname.startsWith('/api')) {
			return handleApiRequest(url, request, env);
		}

		return requestHandler(request);
	},
} satisfies ExportedHandler<Env>;
