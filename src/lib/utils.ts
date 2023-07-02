import type { LogData } from '$lib/types';

const fmtDate = (d: Date) => d.toISOString().replace('T', ' ').replace('Z', '').replace('.', ' ');

const toFixedLength = (val: string, len: number) =>
	(val + Array(len).fill(' ').join('')).slice(0, len);

let record = 0;
// export const logIt = (count = 0, timestamp: Date, source: string, comment = '') => {
export const logIt = (logData: LogData) => {
	// if (logData.action === 'handle') console.log('handle');
	// if (logData.action === '$navigating') console.log('$navigating');

	const timestamp = logData.timestamp || new Date();
	record += 1;
	console.log(
		Object.values({
			timestamp: toFixedLength(fmtDate(timestamp), 24),
			record: toFixedLength(String(record), 4),
			count: toFixedLength(String(logData.count), 4),
			routeDir: toFixedLength(logData.routeDir || '', 12),
			source: toFixedLength(logData.source || '', 24),
			action: toFixedLength(logData.action || '', 12),
			routeId: toFixedLength(logData.routeId || '', 12),
			comment: logData.comment
		}).join('\t')
	);

	return { ...logData, timestamp };
};

const source = 'util.ts';
let count = 1;
logIt({ count, source, comment: 'Load BASE modules.' });
