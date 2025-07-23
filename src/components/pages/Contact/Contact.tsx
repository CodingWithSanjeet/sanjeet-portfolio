import emailjs from "@emailjs/browser";
import { SyntheticEvent, useEffect, useRef, useState } from "react";
import { toast } from 'react-toastify';
import { HeaderTwo, Paragraph } from "../../common";
import "./Contact.scss";

const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [showContent, setShowContent] = useState(false);

  // Sequential rendering: show content after header animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 2000); // Wait for header to render and animate

    return () => clearTimeout(timer);
  }, []);

  const sendEmail = (event: SyntheticEvent) => {
    event.preventDefault();
    if (!formRef.current) return;
    
    const formData = new FormData(formRef.current);
    const formDataObject = Object.fromEntries(formData.entries());
    console.log(formDataObject.name);
    
    // Show loading toast
    const toastId = toast.loading("Sending your message...", {
      position: "top-right",
      style: {
        backgroundColor: '#2a2a2a',
        color: '#fff',
        border: '1px solid #08fdd8',
        borderRadius: '10px',
      }
    });
    
    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID as string,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID as string,
        {
          name: formDataObject.name as string,
          user_name: formDataObject.name as string,
          user_email: formDataObject.email as string,
          user_subject: formDataObject.subject as string,
          message: formDataObject.message as string,
          timestamp: Date.now(),
          email: formDataObject.email as string,
          reply_to: process.env.REACT_APP_EMAILJS_REPLY_TO as string,
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY as string
      )
      .then((res) => {
        console.log(res);
        // Update loading toast to success
        toast.update(toastId, {
          render: "Message sent successfully! Thank you for reaching out.",
          type: "success",
          isLoading: false,
          autoClose: 5000,
          style: {
            backgroundColor: '#2a2a2a',
            color: '#fff',
            border: '1px solid #08fdd8',
            borderRadius: '10px',
          }
        });
        
        // Reset form after successful submission
        if (formRef.current) {
          formRef.current.reset();
        }
      })
      .catch((err) => {
        console.log(err);
        // Update loading toast to error
        toast.update(toastId, {
          render: "Failed to send message. Please try again later.",
          type: "error",
          isLoading: false,
          autoClose: 5000,
          style: {
            backgroundColor: '#2a2a2a',
            color: '#fff',
            border: '1px solid #fd1056',
            borderRadius: '10px',
          }
        });
      });
  };

  return (
    <section
      id="section-contact"
      data-load="contact"
      className="section-full page-contact"
    >
      <div className="text-zone">
        <header>
          <HeaderTwo
            aria-label="Contact me"
            fontsize="6.3rem"
            beforeTag={true}
            afterTag={true}
            delay={5}
          >
            Contact me
          </HeaderTwo>
        </header>

        {/* Render content with visibility control */}
        <div
          className={`content-section ${showContent ? "visible" : "hidden"}`}
        >
          <Paragraph
            fontsize="1.3rem"
            beforeTag={true}
            afterTag={true}
            className="fadeInUp"
          >
            I'm interested in freelance opportunities – especially ambitious or
            large projects. However, if you have other request or question,
            don't hesitate to use the form.
          </Paragraph>
          <div className="contact-form">
            <form
              id="contact"
              ref={formRef}
              onSubmit={sendEmail}
              autoComplete="off"
              className="modern-form"
            >
              <ul>
                <li className="half animated fadeInUp modern-input-group">
                  <input
                    className="input__field input__field--hoshi modern-input"
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                  />
                  <label
                    htmlFor=""
                    className="input__label--hoshi input__label--hoshi-color-2"
                  ></label>
                </li>
                <li className="half animated fadeInUp modern-input-group">
                  <input
                    className="input__field input__field--hoshi modern-input"
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                  <label
                    htmlFor=""
                    className="input__label--hoshi input__label--hoshi-color-2"
                  ></label>
                </li>
                <li className="animated fadeInUp modern-input-group">
                  <input
                    className="input__field input__field--hoshi modern-input"
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                  <label
                    htmlFor=""
                    className="input__label--hoshi input__label--hoshi-color-2"
                  ></label>
                </li>
                <li className="animated fadeInUp modern-input-group">
                  <textarea
                    className="input__field input__field--hoshi modern-textarea"
                    name="message"
                    id="message"
                    cols={30}
                    rows={10}
                    placeholder="Message"
                    required
                  ></textarea>
                  <label
                    htmlFor=""
                    className="input__label--hoshi input__label--hoshi-color-2"
                  ></label>
                </li>
                <li className="submit animated fadeInUp modern-submit-group">
                  <input type="hidden" name="ip" value="115.99.101.93" />
                  <a
                    href="#"
                    id="submit-form"
                    className="flat-button submit-form modern-submit-btn"
                    onClick={sendEmail}
                  >
                    <div>
                      <span className="bg"></span>
                      <span className="base"></span>
                      <span className="text">Send Message!</span>
                    </div>
                  </a>
                  <input
                    style={{ display: "none" }}
                    type="submit"
                    className="flat-button"
                    value="SEND"
                  />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
