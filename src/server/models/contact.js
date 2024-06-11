const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = new Schema({
    _id: {
        type: Number
    },
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phno:{
        type: Number,
        required: true
    },
    fav:{
        type: Boolean
    }
});

module.exports = mongoose.model('Contact',contactSchema);
