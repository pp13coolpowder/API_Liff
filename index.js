const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const connectDB = require('./mongoDB/db');
const app = express();
const port = 3000;
const {readdirSync} = require('fs');
connectDB()
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { extended: true }))
app.listen(port,()=>console.log(`server listening on ${port}`));
readdirSync('./Route').map((r)=> app.use(require('./Route/'+r)))