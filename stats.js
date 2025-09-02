const { readdir, stat } = require('fs').promises

async function logFileStats(file) {
	const fileStats = await stat(file)
	await new Promise((resolve) => setTimeout(resolve, 1000))
	const isFile = fileStats.isFile()

	const logs = [
		isFile ? 'F' : 'D',
		file,
		...(isFile ? [`${fileStats.size}o`] : []),
	]

	console.log(logs.join(' - '))
}

async function filesStatsSync() {
	const files = await readdir('./')

	for (const file of files) {
		await logFileStats(file)
	}
}

async function filesStats() {
	const files = await readdir('./')

	await Promise.all(files.map(logFileStats))
}

module.exports = {
	filesStats,
	filesStatsSync,
}
