import * as React from "react";
import Layout from "../components/layout";
import { Col, Container, Row } from "react-grid-system";
import "../components/styles/contact.scss";

import Mail from "../images/icons/email.svg";
import Phone from "../images/icons/phone.svg";

const Contact = () => {
  return (
    <Layout pageTitle="Contact">
      <div className="contact-page">
        <Container>
          <Row>
            <Col>
              <h1>Get in touch!</h1>
              <h2>Contact us at</h2>
              <p>
                <table>
                  <tr>
                    <td>
                      <Phone className="icon mail" />
                    </td>
                    <td>
                      <a className="nolink" href="tel:+31619183031">
                        +31 6 19183031
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Mail className="icon mail" />
                    </td>
                    <td>
                      <a className="nolink" href="mailto:info@aeroteameindhoven.nl">
                        info@aeroteameindhoven.nl
                      </a>
                    </td>
                  </tr>
                </table>
              </p>

              <h2>Visit us</h2>
              <p style={{ fontWeight: "lighter" }}>
                <div>Horsten 8</div>
                <div>5612 AX Eindhoven</div>
                <div>The Netherlands</div>
                <div>TU/e campus</div>
              </p>
            </Col>
            <Col>
              <div className="map-wrapper">
                <iframe
                  width="100%"
                  height="400"
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=Aero%20Team%20Eindhoven&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  );
};

export default Contact;

// const ContactForm = () => {
//     return (
//         <form>

//         </form>
// }

// function encode(data) {
//   return Object.keys(data)
//     .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
//     .join("&");
// }

// const handleSubmit = (event) => {
//   event.preventDefault();
//   fetch("/", {
//     method: "POST",
//     headers: { "Content-Type": "application/x-www-form-urlencoded" },
//     body: encode({
//       "form-name": event.target.getAttribute("name"),
//       ...name
//     })
//   })
//     .then(() => navigate("/thank-you/"))
//     .catch((error) => alert(error));
// };
