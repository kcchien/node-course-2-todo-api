/**
 * Created by KC on 29/01/2017.
 */
const mongoose = require('mongoose');
const validator = require('validator');


var User = mongoose.model('User', {
    email:{
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        unique: true,
        validate: {
            // validator : (value) => {
            //     return validator.isEmail(value);
            // },
            // 以上為完整式，以下為ES6 簡潔語法
            validator : validator.isEmail,
            message: '{VALUE} is not a valid email'
        },
        password:{
            type: String,
            required: true,
            minlength: 6
        },
        tokens:[{
            access:{
                type: String,
                required: true
            },
            token:{
                type: String,
                required: true
            }
        }]
    }
});

module.exports = {User};