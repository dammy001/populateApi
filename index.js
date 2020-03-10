const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const port = 3000

app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(bodyParser.json());

//Enable all CORS requests
app.use(cors())

app.get('/', function (req, res, next) {
    res.json({
        message: "welcome to populate API"
    });
  })

app.listen(port, () => console.log(`Populate Api App listening on port ${port}!`))