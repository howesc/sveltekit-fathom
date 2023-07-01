import type { LogData } from '$lib/types';
import { writable } from 'svelte/store';
import { logIt } from './utils';

const source = 'stores.ts';
let count = 0;

const createLogStore = () => {
	const { set, subscribe, update } = writable<LogData>();

	return {
		set: (logData: LogData) => {
			const timestamp = new Date();
			const action = 'set';
			count += 1;
			logIt({ ...logData, count, timestamp, action });
			set(logData);
		},
		subscribe,
		update
	};
};

export const logStore = createLogStore();
logStore.set({ source, comment: 'init' });
