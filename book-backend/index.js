const { json } = require('express');
const express = require('express');
require('dotenv').config();
const { default: mongoose } = require('mongoose');
const app = express();
const moongoose = require('mongoose');
const contactRouter = require('./routes/contact-route');
const cors = require('cors');



const corsOptions = {
    origin: 'http://localhost:3000',
    optionSuccessStatus: 'success',
}


app.use(cors(corsOptions));

app.use(express.json());
console.log(process.env.MONGO_URL);

mongoose.connect(process.env.MONGO_URL, () => {
console.log('connect to mongodb')
})

app.use("/api", contactRouter);

app.listen(4000, () => {
    
    console.log('listening on http://localhost:4000');
})