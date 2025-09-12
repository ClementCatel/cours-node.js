// const { readdir, stat } = require('fs').promises
import { readdir, stat } from 'fs/promises'

console.time('reading time')

// solution 1
async function listFiles() {
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
async function listFilesOptimized() {
	const files = await readdir('./')

	await Promise.all(
		files.map(async (file) => {
			const fileStats = await stat(file)
			await new Promise((resolve) => setTimeout(resolve, 1000))
			const isFile = fileStats.isFile()

			const logs = [
				isFile ? 'F' : 'D',
				file,
				...(isFile ? [`${fileStats.size}o`] : []),
			]

			console.log(logs.join(' - '))
		})
	)
	console.timeEnd('reading time')
}

// listFiles()
listFilesOptimized()

/*
F - app - 30o
*/
