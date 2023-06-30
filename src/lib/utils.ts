const fmtDate = (d: Date) => d.toISOString().replace('T', ' ');

export const logIt = (count = 0, timestamp: Date, filename: string, comment = '') => {
	console.log([count, fmtDate(timestamp), filename, comment].join('\t\t'));
	return { count, timestamp: fmtDate(timestamp), filename, comment };
};

const filename = 'util.ts';
let count = 1;
logIt(count, new Date(), filename);
