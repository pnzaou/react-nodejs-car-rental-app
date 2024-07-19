const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()
const router = require('./src/routes/index')

const app = express()
// eslint-disable-next-line no-undef
const port = process.env.PORT

app
    .use(bodyParser.json())
    .use(cors())
    .use(router)
    .use('/uploads', express.static(path.join(__dirname, 'src/uploads')))

app.get('/', (req, res) => {
    res.send('<h1>Hello car-rental-api</h1>')
})

const { connexion } = require('./src/db/db')

connexion()

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})