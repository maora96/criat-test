const express = require('express')
const app = express()
const cors = require('cors')
const router = require('./src/routes')
const PORT = process.env.PORT
const bodyParser = require('body-parser')

require('dotenv').config()

app.use(cors())
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(router)

app.listen(process.env.PORT || 8081, '0.0.0.0', null, () =>
  console.log('Server running in PORT ' + PORT)
)