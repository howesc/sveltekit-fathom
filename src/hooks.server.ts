import { logIt } from '$lib/utils';

const source = 'hooks.server.ts';
let count = 0;

export const handle = async ({ event, resolve }) => {
	const action = 'handle';

	const url = event.request.url.replace('http://localhost:5173', '');

	count += 1;
	logIt({
		count,
		timestamp: new Date(),
		routeId: event.route.id,
		source,
		action,
		comment: `befor: await resolve(event): url=${url}`
	});

	const response = await resolve(event);

	count += 1;
	logIt({
		count,
		timestamp: new Date(),
		routeId: event.route.id,
		source,
		action,
		comment: `after: await resolve(event): url=${url}`
	});

	return response;
};
