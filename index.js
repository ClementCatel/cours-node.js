// const chalk = require('chalk')
const module1 = require('./my_modules/module1')()
const { add } = require('./my_modules/math')
const { readFile } = require('fs').promises

console.log(chalk.blue(module1))
console.log(add(2, 2))

async function readFiles() {
	const content = await Promise.all([
		readFile('./hello.txt', 'utf8'),
		readFile('./index.js', 'utf8'),
	])
	console.log(content)
}

// readFiles()
