import React ,{ useRef } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { VscGithubAlt } from "react-icons/vsc";
import { FaWhatsapp } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import "./contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_usffpcw",
      "template_qbij6xc",
      form.current,
      "LdO4xR-FKvxjYL48_"
    );
  };
  return (
    <section id="contact">
      <h2>Entre em Contato</h2>
      <div className="contact-container">
        <div className="contact-options">
          <article className="contact-option flex">
            <FaLinkedinIn className="social-icon" />
            <a
              href="https://www.linkedin.com/in/yuri-sarmanho-monteiro-939a52182/"
              target="_blanck"
            >
              <h4>yuriSarmanho</h4>
            </a>
          </article>
          <article className="contact-option flex">
            <VscGithubAlt className="social-icon" />
            <a href="https://github.com/YuriSarmanho" target="_blanck">
              <h4>yuriSarmanho</h4>
            </a>
          </article>
          <article className="contact-option flex">
            <FaWhatsapp className="social-icon" />
            <a href="https://wa.me/5591991780812" target="_blanck">
              <h4>{"(91) 99178-0812"}</h4>
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <h4>Nome</h4>
          <input type="text" name="name" placeholder="Nome completo" required />
          <h4>E-mail</h4>
          <input type="text" name="email" placeholder="Seu e-mail" required />
          <h4>Mensagem</h4>
          <textarea
            name="message"
            rows="7"
            placeholder="Sua mensagem"
            required
          ></textarea>
          <button type="submit" className="btn-component btn-option">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
