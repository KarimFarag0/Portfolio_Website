import React from 'react'
import "./contact.css"

const Contact = () => {
  return (
   <section className="contact section" id="contact">
    <h2 className="section__title">Get in touch</h2>
    <span className="section__subtitle">Contact Me</span>

    <div className="contact__container container grid">
        <div className="contact__content">
            <h3 className="contact__title">Talk to me</h3>

        <div className="contact__info">
            <div className="contact__card">
                <i className="bx bx-mail-send contact__card-icon"></i>

                <h3 className="contact__card-title">Email</h3>
                <span className="contact__card-data">Karim.michelf@gmail.com</span>
            </div>

            <div className="contact__card">
                <i className="bx bx-phone contact__card-icon"></i>

                <h3 className="contact__card-title">Phone Number</h3>
                <span className="contact__card-data">+1 (438)-491-6496</span>

            </div>

        </div>
        </div>

    </div>
   </section>
  )
}

export default Contact