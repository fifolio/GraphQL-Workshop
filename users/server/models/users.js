const {model, Schema} = require("mongoose");

const usersSchema = new Schema({
    id: Number,
    userName: String,
    firstName: String,
    lastName: String,
    favNumber: Number,
    isActive: Boolean
})

module.exports = model('users', usersSchema);