import express from 'express'

const app = express()
const port = 5000


app.get('/', (request, response) => {
    response.send("hello world")
})

app.listen(port, () => console.log(`Сервер запущен на ${port} порту`))
