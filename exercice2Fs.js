const { readdir, stat } = require('fs').promises

console.time('reading time')

// solution 1
async function listFilesAndDirs() {
	const files = await readdir('./')

	for (const file of files) {
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

	console.timeEnd('reading time')
}

// solution 2
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

async function listFilesAndDirsAsync() {
	const files = await readdir('./')

	await Promise.all(files.map(logFileStats))
	console.timeEnd('reading time')
}

// listFilesAndDirs()
listFilesAndDirsAsync()

/*
F - app - 30o
*/
