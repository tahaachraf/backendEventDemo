const express = require('express')
const cors = require('cors')
const eventRoute = require('./routes/evenementRoute')
const userRoute = require('./routes/userRoute')
const demoRoute = require('./routes/demoRoute')

const app = express()

// FRONTEND_URL : une ou plusieurs origines séparées par des virgules
const origins = (process.env.FRONTEND_URL || 'http://localhost:5173').split(',').map((s) => s.trim())
app.use(cors({ origin: origins }))
app.use(express.json())
app.use(eventRoute, userRoute)
app.use(demoRoute) // démo lecture seule (GET /demo/users, GET /demo/evenements)

const port = process.env.PORT || 5000
app.listen(port, () => { console.log('Server is running with port ' + port) })
