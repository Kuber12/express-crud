const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add Contact name"],
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

module.exports = mongoose.model("Contact",contactSchema);