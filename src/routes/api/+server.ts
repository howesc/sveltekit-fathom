import { logIt } from '$lib/utils.js';
import { json } from '@sveltejs/kit';

let count = 0;

export const GET = async ({ route, url }) => {
	const searchParam = url.searchParams.get('searchParam');
	count += 1;
	logIt({
		routeDir: '/api',
		routeId: route.id,
		source: '+server.ts',
		action: 'GET',
		count,
    comment: `searchParam: ${searchParam}`
	});

	return json(searchParam);
};
