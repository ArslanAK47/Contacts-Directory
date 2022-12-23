const express = require('express');
const { saveContact, getContacts } = require("../controllers/contact-controller");
const contactRouter = express.Router();


contactRouter.post("/add", saveContact);
contactRouter.get("/users", getContacts);



module.exports = contactRouter;