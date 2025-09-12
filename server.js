import http from 'http'
import { URL } from 'url'

const students = [
	{
		firstname: 'Bob',
		lastname: 'Sponge',
		id: 0,
	},
]

const server = http.createServer((req, res) => {
	const { url, method } = req

	const objectURL = new URL(url, `http://${req.headers.host}`)

	if (method === 'GET' && objectURL.pathname === '/students') {
		res.writeHead(200, {
			'Content-type': 'application/json',
		})
		res.end(JSON.stringify(students))
	} else {
		res.writeHead(404, {
			'Content-type': 'text/plain',
		})
		res.end('404 not found')
	}
})

server.listen(3000, () => {
	console.log('Server is running on http://localhost:3000/')
})
