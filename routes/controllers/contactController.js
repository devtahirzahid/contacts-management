// Complete CRUD

const asyncHandler = require('express-async-handler');
const Contact = require('../../models/contactModel');

// @desc Get All Contacts
// @route GET /api/contacts
// @access public

const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find();
  res.status(200).json({contacts_data: contacts, message: 'Get All Contacts'});
});

// @desc Create New Contact
// @route POST /api/contacts/
// @access public

const createContact = asyncHandler(async (req, res) => {
  const {name, email, phone} = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error('All fields: name, email, phone is mandatory');
  }
  const contact = await Contact.create({name, email, phone});

  res.status(201).json({created_contact: contact, message: 'Create Contact'});
});

// @desc Get Contact
// @route GET /api/contacts/:id
// @access public

const getContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error('Contact Not Found');
  }

  res.status(200).json({
    searched_contact: contact,
    message: `Get Contact for ${req.params.id}`,
  });
});

// @desc Update Contact
// @route PUT /api/contacts/:id
// @access public

const updateContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error('Contact Not Found');
  }

  const updatedContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );

  res.status(200).json({
    updated_contact: updatedContact,
    message: `Updated Contact for ${req.params.id}`,
  });
});

// @desc Delete Contact
// @route DELETE /api/contacts/:id
// @access public

const deleteContact = asyncHandler(async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if (!contact) {
      res.status(404);
      throw new Error('Contact Not Found');
    }

    res.status(200).json({
      deleted_contact: contact,
      message: `Deleted Contact for ${req.params.id}`,
    });
  } catch (error) {
    console.error('Error deleting contact:', error);
    res.status(500).json({error: 'Internal Server Error'});
  }
});

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
