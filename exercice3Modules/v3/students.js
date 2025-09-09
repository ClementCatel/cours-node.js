import { writeFile, readFile } from 'fs/promises'

let students = []

export function addStudent(lastName, firstName, age) {
	if (!lastName || !firstName) {
		throw new Error('Last name and first name are required.')
	}
	students.push({ lastName, firstName, age: Number(age) })
	return 'Student has been added successfully.'
}

export function listStudents() {
	return students
}

export async function saveStudents(filePath) {
	await writeFile(filePath, JSON.stringify(students, null, 2))
	return 'List saved successfully.'
}

export async function loadStudents(filePath) {
	try {
		const data = await readFile(filePath, 'utf-8')
		if (data) {
			students = JSON.parse(data)
		}
		return 'List loaded successfully.'
	} catch (error) {
		if (error.code === 'ENOENT') {
			return 'No file found. Starting with an empty list.'
		}
		throw error
	}
}
