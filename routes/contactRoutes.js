const express = require("express");
// eslint-disable-next-line new-cap
const router = express.Router();
// eslint-disable-next-line max-len
const {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
} = require("./controllers/contactController");

router.route("/").get(getContacts).post(createContact);
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

module.exports = router;
