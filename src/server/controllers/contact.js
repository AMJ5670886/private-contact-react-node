const Contact = require('../models/contact');
const { validationResult } = require('express-validator');

exports.getContacts = async (req, res, next) => {
    try {
        const contacts = await Contact.find();
        if (!contacts) {
            const error = new Error('No contacts');
            error.statusCode = 404;
            throw error;
        }
        return res.status(200).json({ message: 'Success: Contacts fetched!!', data: contacts });
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}

exports.addContact = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const error = new Error('Validation error');
            error.statusCode = 422;
            throw error;
        }
        const { _id, name, email, phno, fav } = req.body;
        const contact = new Contact({
            _id,
            name,
            email,
            phno,
            fav
        });
        await contact.save();
        return res.status(201).json({ message: 'Success: Contact added!', data: contact });
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}

exports.updateContact = async (req, res, next) => {
    try {
        const id = req.params.id;
        const contact = await Contact.findById(id);
        if (!contact) {
            const error = new Error('Validation error');
            error.statusCode = 422;
            throw error;
        }
        contact.fav = !contact.fav;
        contact.save();
        return res.status(201).json({ message: 'Success: Contact updated!!' });
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}

exports.deleteContact = async (req, res, next) => {
    try {
        const id = req.params.id;
        const contact = await Contact.findByIdAndDelete(id);
        return res.status(200).json({ message: 'Success: Contact deleted!!' });
    }catch(err){
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}
