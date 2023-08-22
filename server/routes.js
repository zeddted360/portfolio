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
       
    res.json({message:newMassage});
    const mailOptions = {
      from: 'nwiboazubuike@gmail.com',  
      to: email,            
      subject: 'Message from zedd',
      text: 'Thanks for reaching zedd,\n you\'ll be replied shortly?',
    };
    
      // Send email
      await transporter.sendMail(mailOptions);
      console.log('Email sent successfully');
  
    }
    catch(err){
        console.log(err.message)
        return res.json(err.message);

    }

    
  // Create email data
 
});
module.exports = router;
