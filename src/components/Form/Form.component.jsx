import React from "react";

import { FormContainer, ContactForm } from "./Form.style";

const Form = () => {
  return (
    <FormContainer>
      <ContactForm>
        <form
          id="contactform"
          action="https://formsubmit.io/send/ebaf272f-0e6b-441c-8c2a-7881d541c7be"
          method="POST"
        >
          <h1>Contato</h1>
          <input name="name" type="text" id="name" placeholder="Nome" />
          <input name="email" type="email" id="email" placeholder="Email" />
          <textarea
            name="comment"
            id="comment"
            rows="10"
            placeholder="Escreva sua mensagem"
          />

          <input
            name="_formsubmit_id"
            type="text"
            style={{ display: "none" }}
          />

          <input type="submit" value="Enviar" />
        </form>
      </ContactForm>
    </FormContainer>
  );
};

export default Form;
