import { logIt } from '$lib/utils.js';
import type { Load } from '@sveltejs/kit'

const source = '+page.ts';
let count = 0;

export const load: Load = ({ route }) => {
	count += 1;
	return {
		page: 'data',
		log: logIt({
			count,
			routeDir: '/',
			routeId: route.id,
			source,
			action: 'load',
			comment:
				'+page.ts data supersedes +page.server.ts data. merges with layout or layoutServer data'
		})
	};
};
