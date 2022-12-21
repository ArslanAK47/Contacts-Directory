const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const contactSchema = new Schema ({
    Name : {
        type: "string",
        require: true,
    },
    Email : {
        type: "string",
        require: true,
    },
    Password : {
        type: "string",
        require: true,
    }

})

module.exports = mongoose.model('contact', contactSchema);