 
import "../css/meetme.css"
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
 
function Mailme() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_bwufjmn',  
        'template_8autgjx',  
        e.target,
        'HG4v6JI8i1Tglzkmr'    
      )
      .then(
        (result) => {
          console.log('Email sent successfully:', result.text);
          alert('Email sent successfully!');
        },
        (error) => {
          console.log('Failed to send email:', error.text);
          alert('Failed to send email.');
        }
      );

    // Clear the form (optional)
    e.target.reset();
  };

  return (
    <div className="mailcon">
      <div>
    <form  className="mailforn" onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" required />
      
      <label>Email</label>
      <input type="email" name="user_email" required />
      
      <label>Message</label>
      <textarea name="message" required />
      
      <input type="submit" value="Send" />
    </form></div>
    </div>
  );
}

export default Mailme;
