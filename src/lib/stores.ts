import { writable } from 'svelte/store';
import { logIt } from './utils';

const filename = 'stores.ts';
let count = 0;

const createLogStore = () => {
	const { set, subscribe, update } = writable<string>();

	return {
		set: (comment: string) => {
			count += 1;
			logIt(count, new Date(), filename, comment);
			set(comment);
		},
		subscribe,
		update
	};
};

export const logStore = createLogStore();
logStore.set('init');
