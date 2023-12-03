const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please add Contact name"],
    },
    password: {
        type: String,
        required: [true, "Please add Contact email"],
    },
    email: {
        type: String,
        required: [true, "Please add Contact email"],
    },
    phone: {
        type: String,
        required: [true, "Please add Contact phone"],
    }
})

module.exports = mongoose.model("Users",userSchema);