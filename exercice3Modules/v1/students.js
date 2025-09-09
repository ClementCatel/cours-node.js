let students = []

export function addStudent(lastname, firstname, age) {
	if (!lastname || !firstname) {
		throw new Error('Le nom et le prénom sont obligatoires.')
	}
	students.push({ firstname, lastname, age })
	return 'étudiant ajouté avec succès.'
}

export function listStudents() {
	return students
}
