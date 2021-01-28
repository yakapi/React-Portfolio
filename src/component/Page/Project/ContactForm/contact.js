import React, { Component } from 'react'
import ContactFormStyle from './contact.module.css'
import emailjs from 'emailjs-com';
import name from './name.svg'


class ContactForm extends Component {
  sendEmail = (e) => {
    alert('hello')
    e.preventDefault();

    emailjs.sendForm('service_t44uhgh', 'template_9mtsevc', e.target, 'user_UCJ5x8NfybIfSzO3bupff')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }
  render() {
    const text = [{
      intro: "N'hésitez pas à nous laisser un message ci-dessous"
    }]
    return (
      <div className={ContactFormStyle.contactForm_box}>
        <div className={ContactFormStyle.intro_contact}>
          <p>{text.intro}</p>
        </div>
        <form className={ContactFormStyle.form} onSubmit={this.sendEmail}>
        <input type="hidden" name="contact_number" />
          <div className={ContactFormStyle.contact_line}>
            <div className={ContactFormStyle.cusput}>
              <div className={ContactFormStyle.encard_glass}>
                <img src={name} alt="" />
              </div>
              <input className={ContactFormStyle.custom_input} type="text" name="user_name" placeholder="Nom" />
            </div>
          </div>
          <div className={ContactFormStyle.contact_line}>
            <label>Phone</label>
            <input type="number" name="phone" />
          </div>
          <div className={ContactFormStyle.contact_line}>
            <label>Entreprise</label>
            <input type="text" name="company" />
          </div>
          <div className={ContactFormStyle.contact_line}>
            <label>Email</label>
            <input type="email" name="user_email" />
          </div>
          <div className={ContactFormStyle.contact_line}>
            <label>Message</label>
            <textarea name="message" />
          </div>
          <div className={ContactFormStyle.contact_line}>
            <input type="submit" value="Send" />
          </div>
        </form>

      </div>
    )
  }
}

export default ContactForm
