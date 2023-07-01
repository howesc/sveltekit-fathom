import { logIt } from '$lib/utils.js';
import type { LayoutServerLoad } from './$types'

const source = '+layout.server.ts';
let count = 0;

export const load: LayoutServerLoad = async ({ fetch, route }) => {
	count += 1;
	return {
		layoutServer: 'data',
		log: logIt({
			count,
			routeDir: '/aRoute',
			routeId: route.id,
			source,
			action: 'load',
			comment: `Superseded by (NOT merged with) +layout.ts data. Re-runs on nav to ANY child route.`
		}),
		api: await (await fetch(`/api?searchParam=${source}`)).json()
	};
};
