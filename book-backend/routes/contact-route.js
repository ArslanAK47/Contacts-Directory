const express = require('express');
const { saveContact } = require("../controllers/contact-controller");
const contactRouter = express.Router();

contactRouter.post("/add", saveContact);



module.exports = contactRouter;