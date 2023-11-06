const express = require("express");
const errorHandler = require("./middleware/errorHandler");
// eslint-disable-next-line no-unused-vars
const dotenv = require("dotenv").config();
const bodyPasrer = express.json();

const app = express();

const port = process.env.PORT || 5001;

// eslint-disable-next-line max-len
app
  .use(bodyPasrer)
  .use("/api/contacts", require("./routes/contactRoutes"))
  .use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
