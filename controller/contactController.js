const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

const getContacts = asyncHandler(async (req,res) =>{
    const contacts = await Contact.find();
    res.status(200).json({message : contacts})
})

const getContact = asyncHandler(async (req,res) =>{
    const contacts = await Contact.findById(req.params.id);
    if(!contacts){
        res.status(404).json({message: req.params.id + " not found"});
        throw new Error("not found");
    }else{
        res.status(200).json({message : contacts});
    }
})

const createContact = asyncHandler(async (req,res) =>{
    const {name, email, phone} = req.body;
    if(!name || !email || !phone){
        return res.status(400).json({message: 'Please insert all params'});
    }
    const contact = await Contact.create({
        name,
        email,
        phone
    })
    res.status(201).json(contact);
})

const updateContact = asyncHandler(async (req,res) =>{
    const contacts = await Contact.findById(req.params.id);
    if(!contacts){
        res.status(404).json({message: req.params.id + " not found"});
        throw new Error("not found");
    }else{
        const updatedContact = await Contact.findByIdAndUpdate(
            req.params.id,
            req.body
        )
    }
})

const deleteContact = asyncHandler(async (req,res) =>{
    const contacts = await Contact.findById(req.params.id);
    if(!contacts){
        res.status(404).json({message: req.params.id + " not found"});
        throw new Error("not found");
    }else{
        const deletedContact = await Contact.findByIdAndDelete({_id: req.params.id});
        res.status(200).json({message: deletedContact});
    }
})

module.exports = {getContact,getContacts,createContact,updateContact,deleteContact}