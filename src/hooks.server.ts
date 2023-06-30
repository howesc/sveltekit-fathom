import { logIt } from '$lib/utils';

let count = 0;

export const handle = async ({ event, resolve }) => {
	const timestamp = new Date();
	count += 1;
	logIt(count, timestamp, 'hooks.server.ts', 'before: await resolve(event)');
	const response = await resolve(event);
	logIt(count, timestamp, 'hooks.server.ts', 'after: await resolve(event)');

	return response;
};
