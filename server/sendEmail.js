const nodemailer = require('nodemailer');
require('dotenv').config();


// Create a transporter
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'nwiboazubuike@gmail.com',     // Your email address
    pass: `${process.env.EMAIL_PASS}`,      // Your email password or app password
  },
});

module.exports = transporter;
