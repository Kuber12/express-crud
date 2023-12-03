const express = require("express");
const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");
const router = express.Router();
const {
    getContact,
    getContacts,
    createContact,
    updateContact,
    deleteContact,
} = require("../controller/contactController");

router.route("/").get(getContacts).post(createContact);
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

module.exports = router;