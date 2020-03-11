//const express = require('express')
import express from 'express';
const app = express()

import bodyParser from 'body-parser'
import cors from 'cors';


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