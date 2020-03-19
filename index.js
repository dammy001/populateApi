import express from 'express';
import bodyParser from 'body-parser'
import cors from 'cors';

import signupRoute from './route/user';
import welcomeRoute from './route/index';

const app = express()

const port = 2000

app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(bodyParser.json());

//Enable all CORS requests
app.use(cors())

app.use(signupRoute);
app.use('/', welcomeRoute);

app.listen(port, () => console.log(`Populate Api App listening on port ${port}!`))