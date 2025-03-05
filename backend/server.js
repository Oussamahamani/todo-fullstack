import express from 'express'
import cors from 'cors'

const app = express()

const port = 8080

app.use(cors())

app.get('/test', (req, res) => {
    res.json('Hello (from server)')
})

app.listen(port, () => {
    console.log('Connected to server on port: ', port)
})