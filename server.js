// EXPRESS
import express from 'express'

// CORS
import cors from 'cors'

// UTILITY
import getData from './src/utility/data/getData.js'

// JS
import process from 'process'
import dotenv from 'dotenv'

// VARIABLES
dotenv.config()
const app = express()
const port = process.env.PORT || 3000

// ENABLE MIDDLEWARE
app.use(cors())

// GET /
app.get('/', (req, res) => {
    res.send('Hello World!')
})

// GET /launches
app.get('/launches', async (req, res) => {

    const response = await getData('launches')

    res.json(response)
})

// INITIALISE SERVER
app.listen(port, () => console.log(`Go-Rocket API is live!`))