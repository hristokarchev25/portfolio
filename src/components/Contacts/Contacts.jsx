import React from "react";
import "./contacts.css";
import { MdAttachEmail } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { FaViber } from "react-icons/fa";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contacts = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_h0wwt9m",
      "template_dkrhfgf",
      form.current,
      "F6DpDCZFuE7vcLJRP"
    );

    e.target.reset();
    alert("The message was sent successfully");
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdAttachEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>hristokarchev25@gmail.com</h5>
            <a href="mailto:hristokarchev25@gmail.com" target="_blank" rel="noreferrer">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <FaFacebookSquare className="contact__option-icon" />
            <h4>Facebook</h4>
            <h5>Hristo Karchev</h5>
            <a
              href="https://www.facebook.com/GoClippers.2019"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <FaViber className="contact__option-icon" />
            <h4>Viber</h4>
            <h5>Hristo Karchev - 0884139916</h5>
            {/* <a href="mailto:x_karchev@mail.bg">Send a message</a> */}
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contacts;
