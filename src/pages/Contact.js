import React, { useEffect } from "react";
import "./Contact.css";
import Header from "../components/home/Header";
import Footer from "../components/home/Footer";
import { Container } from "react-bootstrap";
import { IoMdPhonePortrait } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import { IoTimeOutline } from "react-icons/io5";
import { inputStyle } from "../data";

function Contact() {
  useEffect(() => {
    document.title = "Indevice-Contact";
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <Container>
        <section className="contact-section">
          <div className="contact-body">
            <div className="contact-info">
              <div>
                <span>
                  <IoMdPhonePortrait size={"30px"} color="#fa9119" />
                </span>
                <span>Phone No.</span>
                <span className="text">78657 42954</span>
              </div>
              <div>
                <span>
                  <MdOutlineMail size={"30px"} color="#fa9119" />
                </span>
                <span>E-mail</span>
                <span className="text">mail@Indevice.com</span>
              </div>
              <div>
                <span>
                  <MdOutlineLocationOn size={"30px"} color="#fa9119" />
                </span>
                <span>Address</span>
                <span className="text">
                  2th Big Bazar Street, Tamil Nadu, India
                </span>
              </div>
              <div>
                <span>
                  <IoTimeOutline size={"30px"} color="#fa9119" />
                </span>
                <span>Opening Hours</span>
                <span className="text">
                  Monday - Friday (9:00 AM to 8:00 PM)
                </span>
              </div>
            </div>

            <div className="contact-form">
              <form>
                <div>
                  <input
                    type="text"
                    className="form-control"
                    style={inputStyle}
                    placeholder="First Name"
                  />
                  <input
                    type="text"
                    className="form-control"
                    style={inputStyle}
                    placeholder="Last Name"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    className="form-control"
                    style={inputStyle}
                    placeholder="E-mail"
                  />
                  <input
                    type="text"
                    className="form-control"
                    style={inputStyle}
                    placeholder="Phone"
                  />
                </div>
                <textarea
                  rows="5"
                  placeholder="Message"
                  style={inputStyle}
                  className="form-control"
                ></textarea>
                <input
                  type="submit"
                  className="send-btn"
                  value="send message"
                />
              </form>

              <div>
                <img src="../image/contact-png.png" alt="" />
              </div>
            </div>
          </div>
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.0986519474127!2d77.01979347480649!3d10.880100889275024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba84ffc9b3ea755%3A0xda7508a90583d22f!2sKarpagam%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1703269167847!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
      </Container>
      <Footer />
    </>
  );
}

export default Contact;
