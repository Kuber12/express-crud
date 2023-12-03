const express = require("express");
const asyncHandler = require("express-async-handler");
const Users = require("../models/userModel");
const router = express.Router();
const {
    getUsers
} = require("../controller/userController");

// router.route("/register").post(createUser);
// router.route("/login").get(getContact).put(updateContact).delete(deleteContact);
router.post("/current",(req,res) => {
    res.json({message : "Current User Information"})
})
module.exports = router;