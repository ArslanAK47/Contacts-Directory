const { json } = require('express');
const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();
const moongoose = require('mongoose');
const contactRouter = require('./routes/contact-route');
require('dotenv').config();


app.use(express.json());

mongoose.connect(process.env.MONGO_URL, () => {
console.log('connect to mongodb')
})

app.use("/api", contactRouter);

app.listen(4000, () => {
    
    console.log('listening on http://localhost:4000');
})