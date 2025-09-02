const { readFile } = require('fs').promises

async function readFiles() {
	const content = await Promise.all([
		readFile('./hello.txt', 'utf8'),
		readFile('./index.js', 'utf8'),
	])
	console.log(content)
}

readFiles()
