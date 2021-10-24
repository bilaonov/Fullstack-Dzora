import mongoose from 'mongoose'
import config from 'config'
import express from 'express'
import authRouter from './routes/auth.routes'
import wordRouter from './routes/word.routes'
import corsMiddleware from './middleware/cors.middleware'

const app = express()
const PORT = config.get('port') || 5000

app.use(corsMiddleware)
app.use(express.json())
app.use('/api/auth/', authRouter)
app.use('/api/', wordRouter)

async function start() {
    try {
        await mongoose.connect(config.get('mongoUri'), {})
        app.listen(PORT, () =>
            console.log(`App has bin server started on port ${PORT}...`)
        )
    } catch (e) {
        console.log('Server Error', e.message)
        process.exit(1)
    }
}

start()
