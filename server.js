const express= require('express')
const app = express()
const cors= require('cors')
//const db =require('./database/connectionDB')
const eventRoute= require('./routes/evenementRoute')
const userRoute= require('./routes/userRoute')
const demoRoute= require('./routes/demoRoute')

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json())     
app.use(eventRoute,userRoute) 
app.use(demoRoute) // démo lecture seule (GET /demo/users, GET /demo/evenements)


app.listen(5000, ()=>{console.log('Server is running with port 5000')})
