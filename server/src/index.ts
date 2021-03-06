import mongoose from 'mongoose'
import config from 'config'
import express from 'express'
import authRouter from './routes/auth.routes'
import wordRouter from './routes/words.routes'
import searchRouter from './routes/search.routes'

const app = express()
const PORT = config.get('port') || 80

app.use(express.json())
app.use('/api/auth/', authRouter)
app.use('/api/', wordRouter)
app.use('/api/words/search', searchRouter)

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
