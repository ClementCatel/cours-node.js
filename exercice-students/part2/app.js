import {
	addStudent,
	listStudents,
	saveStudents,
	loadStudents,
} from './students.js'

try {
	await loadStudents('students.json')

	console.log(addStudent('Dupont', 'Jean', 20))
	console.log(addStudent('Martin', 'Sophie', 21))
	console.log(addStudent('Bernard', 'Pierre', 22))

	await saveStudents('students.json')

	const list = listStudents()
	console.log('Liste des étudiants :', list)
} catch (error) {
	console.error('Erreur :', error.message)
}
