const express = require('express')
const app = express()
const cors = require('cors')
const router = require('./src/routes')
const PORT = process.env.PORT
const app = express()

require('dotenv').config()

app.use(cors())

app.use(router)

app.listen(process.env.PORT || 8081, '0.0.0.0', null, () =>
  console.log('Server running.')
)