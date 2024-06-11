const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contact');
const {body} = require('express-validator');

router.get('/',contactController.getContacts);

router.post('/',[
    body('name').trim().not().isEmpty(),
    body('email').isEmail().trim(),
    body('phno').trim().isNumeric()
],contactController.addContact);

router.put('/:id',contactController.updateContact);

router.delete('/:id',contactController.deleteContact);

module.exports = router;