import { logIt } from '$lib/utils.js';
import type { LayoutServerLoad } from './$types';

const source = '+layout.server.ts';
let count = 0;

export const load: LayoutServerLoad = async ({ fetch, route }) => {
	count += 1;
	return {
		layoutServer: 'data',
		log: logIt({
			count,
			routeDir: '/',
			routeId: route.id,
			source,
			action: 'load',
			comment: `Re-runs on loading ANY child page. Superseded by (NOT merged with) +layout.ts data.`
		}),
		api: await (await fetch(`/api/layout`)).json()
	};
};
