import { logIt } from '$lib/utils.js';
import { json } from '@sveltejs/kit';

let count = 0;

export const GET = async ({ route, params }) => {
	const slug = params.slug
  count += 1;
	logIt({
		routeDir: '/api',
		routeId: route.id,
		source: '+server.ts',
		action: 'GET',
		count,
		comment: `slug: ${params.slug}`
	});

	return json({slug});
};
