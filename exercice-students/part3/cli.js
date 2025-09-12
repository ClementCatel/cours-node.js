import readline from 'readline'
import {
	addStudent,
	listStudents,
	saveStudents,
	loadStudents,
} from './students.js'

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
})

await loadStudents('students.json')
console.log('Welcome to the student manager!')

const menu = {
	1: 'Add a student',
	2: 'List all students',
	3: 'Quit',
}

function displayMenu() {
	console.log('\n====== Menu ======')
	for (const [key, value] of Object.entries(menu)) {
		console.log(`${key}: ${value}`)
	}
	console.log('==================\n')
}

async function handleMenu() {
	let running = true

	while (running) {
		displayMenu()

		const choice = await askQuestion('Choose an option (1-3): ')

		try {
			switch (choice) {
				case '1':
					await addStudentCli()
					break
				case '2':
					listStudentsCli()
					break
				case '3':
					await saveStudents('students.json')
					console.log('Goodbye!')
					running = false
					return
				default:
					console.log('Invalid option. Please try again.')
			}
		} catch (error) {
			console.error('Error:', error.message)
		}
	}
}

async function addStudentCli() {
	const lastName = await askQuestion("Student's last name: ")
	const firstName = await askQuestion("Student's first name: ")
	const age = await askQuestion("Student's age: ")

	try {
		const message = addStudent(lastName, firstName, age)
		console.log(message)
	} catch (error) {
		console.error('Error:', error.message)
	}
}

function listStudentsCli() {
	const studentList = listStudents()
	if (studentList.length === 0) {
		console.log('No students registered.')
	} else {
		console.log('\nList of students:')
		studentList.forEach((student, index) => {
			console.log(
				`${index + 1}. ${student.firstName} ${student.lastName} (${
					student.age
				} years old)`
			)
		})
	}
}

function askQuestion(question) {
	return new Promise((resolve) => {
		rl.question(question, resolve)
	})
}

handleMenu().finally(() => {
	rl.close()
})
