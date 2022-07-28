const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const userloginSchema = new mongoose.Schema({
    username:{
        type:String,
        trim:true
    },
    
    email:{
        type:String,
        trim:true,
        required: 'plese enter valid email'
    },

    password:{
        type:String,
        trim:true
    } 
})

userloginSchema.plugin(passportLocalMongoose, {usernameField: 'email'})
//exporting schema
module.exports = mongoose.model('Userlogin', userloginSchema);