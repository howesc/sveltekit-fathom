import { logIt } from '$lib/utils.js';

const filename = '+layout.ts';
let count = 0;

export const load = ({}) => {
	const timestamp = new Date();
	count += 1;
	return logIt(count, timestamp, filename);
};
