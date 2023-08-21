const express = require('express');
const mongoose = require('mongoose');
const port_message = require('./messageShema');
const transporter = require('./sendEmail');

const router = express.Router();

router.get('/',(req,res)=> {
  res.json("Hello welcome");
});

router.post('/message',async (req,res)=> {
    const { name, email, subject, message } = req.body;
    try{
            const newMassage = await port_message.create({
                name,
                email,
                subject,
                message,
            }); 
       
    res.json(message);
    }
    catch(err){
        console.log(err.message)
        return res.json(err.message);

    }

    
  // Create email data
  const mailOptions = {
    from: 'nwiboazubuike@gmail.com',  
    to: email,            
    subject: 'Message from zedd',
    text: 'Thanks for reaching zedd,\n you\'ll be replied shortly?',
  };
  
  try {
    // Send email
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
    res.status(200).end('Email sent successfully');
  } 
  catch (err) {
    console.error('Error sending email:', err.message);
    res.status(500).end('Error sending email');
  }
});
module.exports = router;
