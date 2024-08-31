require('dotenv').config()
const express = require('express')
const routers = require('./routes')
const app = express()
const path = require('path')
const cors = require('cors')
const fs = require('fs')
const https = require('https')

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', routers)

const options = {
	key: fs.readFileSync(path.join(__dirname, 'localhost.key')),
	cert: fs.readFileSync(path.join(__dirname, 'localhost.crt')),
}

https.createServer(options, app).listen(process.env.PORT, () => {
	console.log('HTTPS server started on port ', process.env.PORT)
})
