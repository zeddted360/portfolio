const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const newMessageSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    subject:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
},{ timestamps:true,});

module.exports = model('port_folio_message',newMessageSchema);