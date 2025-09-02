function loadConfig() {
	const port = Number(process.env.PORT) || 3000

	const validEnvs = ['development', 'production', 'test']
	if (process.env.NODE_ENV && !validEnvs.includes(process.env.NODE_ENV)) {
		throw new Error(
			`Invalid NODE_ENV value: ${
				process.env.NODE_ENV
			}. Valid values are ${validEnvs.join(', ')}`
		)
	}
	const nodeEnv = process.env.NODE_ENV || 'development'

	if (!process.env.DATABASE_URL) {
		throw new Error(
			'Environment variable DATABASE_URL is required but not set.'
		)
	}
	const databaseUrl = process.env.DATABASE_URL

	return { port, nodeEnv, databaseUrl }
}

const config = loadConfig()

console.log('Configuration loaded', config)

// PORT=8080 NODE_ENV=production DATABASE_URL="postgres://user:pass@host/db" node config.js
