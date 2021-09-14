export const mongoose = require('mongoose')
const config = require('config')
const express = require('express');
const authRouter = require('./routes/auth.routes')


const app = express()
const PORT = config.get('port') || 5000


app.use(express.json())
app.use('/api/auth/', authRouter)



async function start() {
    try {
        await mongoose.connect(config.get('mongoUri'),{
            useNewUrlParser: true,
            useUnifiedTopology: true,

        })
        app.listen(PORT, () => console.log(`App has bin server started on port ${PORT}...`))
    } catch (e) {
        console.log('Server Error', e.message)
        process.exit(1)
    }
}

start()