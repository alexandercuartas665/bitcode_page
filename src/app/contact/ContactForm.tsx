"use client";
import { errorAlert, successAlert } from "@/components/Common/alerts";
import axios from "axios";
import { FC, useState } from "react";


interface IContactFormData {
  nombre: string;
  celular: string;
  correo: string;
  mensaje: string;
  asunto: string;
}
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const ContactForm: FC = () => {
  const [dataContact, setDataContact] = useState<IContactFormData>({
    nombre: "",
    celular: "",
    correo: "",
    mensaje: "",
    asunto: "",
  });

  //Funcion para validar si el email tiene un formato valid
  const validateForm = (dataContact: IContactFormData) => {
    let messageError = "";

    if (dataContact.nombre.length < 3) {
      messageError = "El nombre no puede ser menor a 3 caracteres";
    }

    if (dataContact.nombre.length == 0) {
      messageError = "El nombre no puede ser vacio";
    }

    if (dataContact.correo.length < 3) {
      messageError = "El correo electronico no puede ser menor a 3 caracteres";
    }

    if (dataContact.correo.length == 0) {
      messageError = "El correo electronico no puede ser vacio";
    }

    if (!regex.test(dataContact.correo.toLowerCase())) {
      messageError = "El correo electronico no es valido";
    }

    if (dataContact.celular.length == 0) {
      messageError = "El celular no puede ser vacio";
    }

    if (dataContact.asunto.length == 0) {
      messageError = "El asunto no puede ser vacio";
    }

    if (dataContact.mensaje.length == 0) {
      messageError = "El mensaje no puede ser vacio";
    }

    return messageError;
  };

  const handleSubmit = async () => {
    let valForm = validateForm(dataContact);
    if (valForm != "") {
      errorAlert("Error validando el formulario", valForm, "");
      return;
    }

    const jsonData = JSON.stringify(dataContact);
    const dataJson = `Parametrox=${encodeURIComponent(jsonData)}`;

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://app.bitcode.com.co/servicios/sweb_contactos.asmx/AgregarContactos',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: dataJson
    };

    axios.request(config)
      .then((response) => {
        console.log("ok, ", JSON.stringify(response.data));
        successAlert("Formulario enviado correctamente", "Pronto nos pondremos en contacto con usted.", "");
        //Reiniciamos el formulario
        setDataContact({
          nombre: "",
          celular: "",
          correo: "",
          mensaje: "",
          asunto: "",
        });
      })
      .catch((error) => {
        console.log("error: ", error);
        errorAlert("Error enviando el formulario", "Por favor intentelo de nuevo más tarde.", "");
      });

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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4288.501776112959!2d-76.52935049999999!3d3.4588001999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a768e148ee6b%3A0xe62853753bb5a0c5!2sBITCODE%20IT%20SERVICES%20S.A.S!5e1!3m2!1ses-419!2sco!4v1743446955212!5m2!1ses-419!2sco"
              loading="lazy" />
          </div>

          <div className="item">
            <div className="uk-grid uk-grid-match uk-grid-medium uk-child-width-1-2@m uk-child-width-1-1@s">
              <div className="item" style={{ marginBottom: "20px" }}>
                <input
                  type="text"
                  className="uk-input"
                  placeholder="Nombre completo"
                  value={dataContact.nombre}
                  maxLength={50}
                  onChange={({ target }) => setDataContact({ ...dataContact, nombre: target.value })}
                />
              </div>

              <div className="item" style={{ marginBottom: "20px" }}>
                <input
                  type="email"
                  className="uk-input"
                  placeholder="Correo electronico"
                  value={dataContact.correo}
                  onChange={({ target }) => setDataContact({ ...dataContact, correo: target.value })}
                />
              </div>

              <div className="item" style={{ marginBottom: "20px" }}>
                <input
                  type="text"
                  className="uk-input"
                  placeholder="Celular"
                  value={dataContact.celular}
                  maxLength={10}
                  onChange={({ target }) => {
                    //Se aplica un replace para poder enviar solamente numeros
                    setDataContact({ ...dataContact, celular: target.value.replace(/[^0-9]/g, "") });
                  }}
                />
              </div>

              <div className="item" style={{ marginBottom: "20px" }}>
                <input
                  type="text"
                  className="uk-input"
                  placeholder="Asunto"
                  value={dataContact.asunto}
                  maxLength={50}
                  onChange={({ target }) => setDataContact({ ...dataContact, asunto: target.value })}
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
                value={dataContact.mensaje}
                maxLength={100}
                onChange={({ target }) => setDataContact({ ...dataContact, mensaje: target.value })}
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