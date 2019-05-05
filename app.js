const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');

const mailchimp = require('./integrations/mailchimp.js');

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

app.post('/addSubscriber', (req, res) => {
  let email = req.body.email;
  console.log("Subscribing: |" + email + "|");
  mailchimp.addSubscriber(email, res);
});

app.use(express.static(path.join(__dirname, './client/')));

app.listen(process.env.PORT || 8082);
console.log("Server running on http://localhost:" + (process.env.PORT || 8082));