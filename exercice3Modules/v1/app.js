import { addStudent, listStudents } from './students.js'

try {
	console.log(addStudent('Dupont', 'Jean', 20))
	console.log(addStudent('Martin', 'Sophie', 21))
	console.log(addStudent('Bernard', 'Pierre', 22))

	const list = listStudents()
	console.log('Liste des étudiants :', list)
} catch (error) {
	console.error('Erreur :', error.message)
}
