const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
const port = 3000

app
    .use(bodyParser.json())
    .use(cors())

app.get('/', (req, res) => {
    res.send('<h1>Hello api</h1>')
})


app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})