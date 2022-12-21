const Contact = require('../models/contact');

const saveContact = async (req, res ) => {
    const {Name, Email, Password} = req.body;

    const contact = new Contact({
        Name,
        Email,
        Password
    })

    try{
        contact.save()
        return res.status(201).json(contact)
    } catch(err){
        console.log(err)
    }
}

module.exports = {saveContact}