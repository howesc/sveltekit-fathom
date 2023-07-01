import { logIt } from '$lib/utils.js';
import type { PageServerLoad } from './$types';

const source = '+page.server.ts';
let count = 0;

export const load: PageServerLoad = async ({ route, fetch }) => {
	count += 1;
	return {
		pageServer: 'data',
		log: logIt({
			count,
			routeDir: '/',
			routeId: route.id,
			source,
			action: 'load',
			comment:
				'Superseded by +page.ts data - NOT merged with it. Merges with layout or layoutServer data. Re-runs on nav hover to own route ONLY.'
		}),
		api: await (await fetch(`/api?searchParam=${source}`)).json()
	};
};
