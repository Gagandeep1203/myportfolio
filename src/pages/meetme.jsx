 
import "../css/meetme.css"
 
import React, { useState,useEffect } from 'react';
import emailjs from 'emailjs-com';
import Footer from "../compnent/footer";

 
function Mailme() { 
  useEffect(()=>{
    function handleMouseMove(event) {
      const { clientX, clientY } = event;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      const offsetX = (clientX - centerX) / centerX;
      const offsetY = (clientY - centerY) / centerY;

      const children = document.querySelectorAll(".mailcon > *");
      const cross1= document.querySelectorAll(".c");
      cross1.forEach((child, index) => {
        const intensity = (index + 1) * 0.4; // Adjust intensity based on child index
        const translateX = offsetX * intensity * 60; // Modify 20 for translation distance
        const translateY = offsetY * intensity * 60;

        child.style.transform = `translate(${translateX}px, ${translateY}px)`;
      });
      children.forEach((child, index) => {
        const intensity = (index + 1) * 0.2; // Adjust intensity based on child index
        const translateX = offsetX * intensity * 60; // Modify 20 for translation distance
        const translateY = offsetY * intensity * 60;

        child.style.transform = `translate(${translateX}px, ${translateY}px)`;
      });
    }
    window.addEventListener("mousemove", handleMouseMove);
    return(window.removeEventListener("mousemove",handleMouseMove))
  },[])

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

  return (  <>
    <div className="mailpar"> 
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
         </form>
        </div> 
      </div>
    
      <div className="horizontal-hidden-wrapper">
  <div className="cross1 c"></div>
  <div className="cross2 c"></div>
  <Footer></Footer>
</div>
     </div>
      </>
  );
}

export default Mailme;
