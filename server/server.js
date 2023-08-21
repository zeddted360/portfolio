const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config();
const router = require('./routes');
const app = express();

app.use(cors({
    origin:'https://zedd-ted-porto.vercel.app/',
    methods:'POST,GET',
    optionsSuccessStatus:200,
}));

app.use(morgan('dev'));
app.use(express.json());

const dbUri = process.env.URI;
const port = process.env.PORT;

mongoose.connect(dbUri)
.then(()=>{
    console.log("Connected to database");
    app.listen(port,()=>{
        console.log(`Listening on port ${port}`);
    });
})
.catch(err=> console.error(err.message));
app.use(router);


