"use client";
import { FC, useState } from "react";


interface IContactFormData {
  name: string;
  email: string;
  number: string;
  subject: string;
  message: string;
}

const ContactForm: FC = () => {
  const [dataContact, setDataContact] = useState<IContactFormData>({
    name: "",
    email: "",
    number: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async () => {
    console.log(dataContact);
  };

  return (
    <section
      id="contact"
      className="contact-area uk-dark uk-contact uk-section"
    >
      <div className="uk-container">
        <div className="uk-section-title section-title">
          <h2>Contactanos</h2>
        </div>

        <div className="uk-grid uk-grid-match uk-grid-medium uk-child-width-1-2@m uk-child-width-1-1@s">
          <div className="item iframe_map_container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.5505287584274!2d-76.53191142407773!3d3.458822296515632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a66bda77ecf5%3A0x7347b8fc6cfcadd1!2sCl.%2018%20Nte.%20%233N-24%2C%20San%20Vicente%2C%20Cali%2C%20Valle%20del%20Cauca!5e0!3m2!1ses-419!2sco!4v1741270051833!5m2!1ses-419!2sco"
              loading="lazy" />
          </div>

          <div className="item">
            <div className="uk-grid uk-grid-match uk-grid-medium uk-child-width-1-2@m uk-child-width-1-1@s">
              <div className="item" style={{ marginBottom: "20px" }}>
                <input
                  type="text"
                  className="uk-input"
                  placeholder="Nombre completo"
                  value={dataContact.name}
                  onChange={({ target }) => setDataContact({ ...dataContact, name: target.value })}
                />
              </div>

              <div className="item" style={{ marginBottom: "20px" }}>
                <input
                  type="email"
                  className="uk-input"
                  placeholder="Correo electronico"
                  value={dataContact.email}
                  onChange={({ target }) => setDataContact({ ...dataContact, email: target.value })}
                />
              </div>

              <div className="item" style={{ marginBottom: "20px" }}>
                <input
                  type="text"
                  className="uk-input"
                  placeholder="Celular"
                  value={dataContact.number}
                  onChange={({ target }) => setDataContact({ ...dataContact, number: target.value })}
                />
              </div>

              <div className="item" style={{ marginBottom: "20px" }}>
                <input
                  type="text"
                  className="uk-input"
                  placeholder="Asunto"
                  value={dataContact.subject}
                  onChange={({ target }) => setDataContact({ ...dataContact, subject: target.value })}
                />
              </div>
            </div>

            <div className="item" style={{ marginBottom: "20px" }}>
              <textarea
                name="message"
                className="uk-textarea"
                cols={30}
                rows={4}
                placeholder="Escribir mensaje"
                value={dataContact.message}
                onChange={({ target }) => setDataContact({ ...dataContact, message: target.value })}
              />
            </div>

            <button onClick={handleSubmit} className="uk-button uk-button-default">
              Enviar Mensaje
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;