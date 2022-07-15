import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from '../styles/Home.module.scss'

const ContactUs = () => {
 
  const sendEmail = (e) => {
    e.preventDefault();
   

    emailjs.sendForm('service_7bbxv1w', 'template_3t3i0eb', e.target, '3fkWKlIXOTJ-6HhgN')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    alert("Din besked blev sendt")
    e.target.reset();
  };



  return (
    <section>
    <h3>Send mig en besked via nedenstående formular:</h3>
    <form onSubmit={sendEmail}>
      <label htmlFor="first">Navn</label>
      <input type="text" id="first" name="user_name" required />

      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="user_email" required />

      <label htmlFor="text">Besked</label>
      <textarea name="message" required/>

      <button type="submit" id="submit" name="submit"value="Send">Send</button>
    </form>
    </section>
  );
};

export default ContactUs;