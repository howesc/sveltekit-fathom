import { logIt } from '$lib/utils.js';
import type { PageServerLoad } from './$types'

const source = '+page.server.ts';
let count = 0;

export const load:PageServerLoad = async ({ route, fetch }) => {
	count += 1;
	return {
		pageServer: 'data',
		log: logIt({
			count,
			routeDir: '/aRoute',
			routeId: route.id,
			source,
			action: 'load',
			comment:
				'Superseded by (NOT merged with) +page.ts data. Merges with layout or layoutServer data. Re-runs on nav hover to own route ONLY.'
		}),
		api: await (await fetch(`/api?searchParam=${source}`)).json()
	};
};
