import { logIt } from '$lib/utils.js';
import type { Load } from '@sveltejs/kit';

const source = '+layout.ts';
let count = 0;

export const load: Load = ({ route }) => {
	count += 1;
	return {
		layout: 'data',
		log: logIt({
			count,
			routeDir: '/',
			routeId: route.id,
			source,
			action: 'load',
			comment: '+layout.ts data supersedes +layout.server.ts data'
		})
	};
};
