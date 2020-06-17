const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    uname: { 
        type: String, 
        required: [true, "Username is required."],
        minlength: [4, "Username must be minimum 4 characters in length."],
        maxlength: [16, "Username cannot be longer than 16 characters in length."],
        unique: [true, "That username is taken."],
        validate: {
            validator: val => /^[A-Za-z0-9_]*$/.test(val),
            message: "Username can only contain letters, numbers, and underscores."
        }
    },
    password: { 
        type: String,
        required: true,
        minlength: 5,
        maxlength: 999 
    }
}, { timestamps: true })

const User = mongoose.model("User", UserSchema);

UserSchema.virtual('confirmPassword')
    .get( () => this._confirmPassword)
    .set( value => this._confirmPassword = value);


UserSchema.pre('validate', function(next) {
    if (this.password !== this.confirmPassword) {
        this.invalidate('confirmPassword', 'Passwords do not match.');
    }
    next();
});

UserSchema.pre('save', function(next) {
    bcrypt.hash(this.password, 10)
        .then(hash => {
            this.password = hash;
            next();
        })
})

module.exports = User;