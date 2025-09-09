import { readFile, writeFile } from 'fs/promises'

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

export async function saveStudents(filePath) {
	await writeFile(filePath, JSON.stringify(students, null, 2))
	return 'Liste sauvegardée avec succès.'
}

export async function loadStudents(filePath) {
	try {
		const data = await readFile(filePath, 'utf-8')

		if (data) {
			students = JSON.parse(data)
		}

		return 'Liste chargée avec succès.'
	} catch (error) {
		if (error.code === 'ENOENT') {
			return 'Aucun fichier trouvé.'
		}
		throw error
	}
}
