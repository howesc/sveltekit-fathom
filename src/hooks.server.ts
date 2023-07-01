import { logIt } from '$lib/utils';

const source = 'hooks.server.ts';
let count = 0;

export const handle = async ({ event, resolve }) => {
	const timestamp = new Date();
	const action = 'handle';
	count += 1;

	logIt({
		count,
		timestamp,
		routeId: event.route.id,
		source,
		action,
		comment: 'before: await resolve(event)'
	});

	const response = await resolve(event);
	logIt({
		count,
		timestamp,
		routeId: event.route.id,
		source,
		action,
		comment: 'after: await resolve(event)'
	});

	return response;
};
