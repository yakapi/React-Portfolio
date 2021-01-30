import React, { Component } from 'react'
import ContactFormStyle from './contact.module.css'
import emailjs from 'emailjs-com';
import name from './name.svg'
import phone from './phone.svg'
import building from './building.svg'
import email from './email.svg'


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
    const text = {
      intro: "N'hésitez pas à nous laisser un message ci-dessous",
      titre: "Entrer en contact"
    }
    let area = {
      marginLeft: "26px"
    }
    console.log(text);
    return (
      <div className={ContactFormStyle.contactForm_box}>
        <div className={ContactFormStyle.intro_contact}>
          <h2 className={ContactFormStyle.titre_intro} >{text.titre}</h2>
          <p className={ContactFormStyle.text_intro} >{text.intro}</p>
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
            <div className={ContactFormStyle.cusput}>
              <div className={ContactFormStyle.encard_glass}>
                <img src={phone} alt="" />
              </div>
              <input className={ContactFormStyle.custom_input} type="number" name="phone" placeholder="Téléphone" />
            </div>          </div>
          <div className={ContactFormStyle.contact_line}>
            <div className={ContactFormStyle.cusput}>
              <div className={ContactFormStyle.encard_glass}>
                <img src={building} alt="" />
              </div>
              <input className={ContactFormStyle.custom_input} type="text" name="company" placeholder="Entreprise" />
            </div>          </div>
          <div className={ContactFormStyle.contact_line}>
            <div className={ContactFormStyle.cusput}>
              <div className={ContactFormStyle.encard_glass}>
                <img src={email} alt="" />
              </div>
              <input className={ContactFormStyle.custom_input} type="email" name="user_email" placeholder="E-mail" />
            </div>          </div>
          <div className={ContactFormStyle.contact_line}>
            <div className={ContactFormStyle.custext}>
              <textarea style={area} className={ContactFormStyle.custom_textarea} name="message" placeholder="message" />
            </div>
          </div>
          <div className={ContactFormStyle.contact_line}>
            <div className={ContactFormStyle.sub_box}>
              <input className={ContactFormStyle.subutton} type="submit" value="Envoyer" />
            </div>
          </div>
        </form>

      </div>
    )
  }
}

export default ContactForm
