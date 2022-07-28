const mongoose = require('mongoose');
const managerSchema = new mongoose.Schema({
    firstname:{
        type:String,
        trim:true
    },
    secondname:{
        type:String,
        trim:true
    },
    maritalstatus:{
        type:String,
        trim:true
    },
    dob:{
        type:Date   
    },
    gender:{
        type:String
    },
    phonenumber:{
        type:String,
        trim:true
    },
    role:{
        type:String
    }
});

//exporting schema
module.exports = mongoose.model('Managers', managerSchema);
