const Contact = require('../models/contact');

const saveContact = async (req, res ) => {
    const {Name, Email, Password} = req.body;

    const contact = new Contact({
        Name,
        Email,
        Password
    })
    let existinguser;
    try{
        existinguser = await Contact.findOne({Email});
    }catch(e){
        console.error(e);
    }
    if (existinguser){
        return res.status(400).json({message: "Contact already exists"})
    }
    try{
        contact.save()
        return res.status(201).json(contact)
    } catch(err){
        console.log(err)
    }
}


const getContacts = async (req, res) => {
    let users;
    try{
        users = await Contact.find()
    } catch(err) {
        console.error(err)
    }
    if(!users){
        return res.status(404).json({message: "Users not found"})
    }
    return res.status(200).json({users})
}

module.exports = {saveContact, getContacts}