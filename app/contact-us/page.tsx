"use client";

import { Header } from "../../components/layout/Header";
import { PageHero } from "../../components/shared/PageHero";
import { COMPANY, phoneHref } from "../../lib/constants";
import { Footer } from "../../components/layout/Footer";
import { Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import styles from "./page.module.css";
import { FormEvent, useState } from "react";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycby5bJdeWnmNIg81zSrPs76jwZkqt3gy6uKTUzj3mx43wA7IuhV11rvFND_CqGk9r0dC/exec";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  setLoading(true);
  setSuccess("");

  const form = e.currentTarget;
  const formData = new FormData(form);

  const body = new URLSearchParams();

  body.append("name", formData.get("name")?.toString() || "");
  body.append("phone", formData.get("phone")?.toString() || "");
  body.append("email", formData.get("email")?.toString() || "");
  body.append("service", formData.get("service")?.toString() || "");
  body.append("message", formData.get("message")?.toString() || "");

  try {
    await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      body,
    });

    setSuccess("Thank you! Your enquiry has been submitted successfully.");
    form.reset();
  } catch (error) {
    console.error(error);
    setSuccess("Something went wrong. Please try again.");
  } finally {
    setLoading(false);
  }
};

//   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     setLoading(true);
//     setSuccess("");

//     const form = e.currentTarget;

//     const formData = new FormData(form);

//     const data = {
//       name: formData.get("name")?.toString() || "",
//       phone: formData.get("phone")?.toString() || "",
//       email: formData.get("email")?.toString() || "",
//       service: formData.get("service")?.toString() || "",
//       message: formData.get("message")?.toString() || "",
//     };

//     try {
//   const body = new URLSearchParams();

//   body.append("name", data.name);
//   body.append("phone", data.phone);
//   body.append("email", data.email);
//   body.append("service", data.service);
//   body.append("message", data.message);

//   await fetch(GOOGLE_SCRIPT_URL, {
//     method: "POST",
//     body,
//   });

//   setSuccess(
//     "Thank you! Your enquiry has been submitted successfully."
//   );

//   form.reset();

// } catch (error) {
//   console.error(error);

//   setSuccess(
//     "Something went wrong. Please try again."
//   );
// }
//   };

  return (
    <>
      <Header />

      <PageHero
        eyebrow="CONTACT US"
        title={
          <>
            Let's <span style={{ color: "var(--primary)" }}>Talk</span>
          </>
        }
        text="Need computer repair, CCTV installation or a website? Contact Bullock TechnoSoft in Ahmedabad."
      />

      <main className="section">
        <div className="container">
          <div className={styles.grid}>
            <div>
              <div className="sectionTag">GET IN TOUCH</div>

              <h2 className="sectionTitle">
                Tell Us What <span>You Need</span>
              </h2>

              <p className={styles.text}>
                Call, WhatsApp or send your requirement through the form. We
                will get back to you with the next steps.
              </p>

              <div className={styles.info}>
                <a
                  href={phoneHref}
                  className="hoverLift"
                >
                  <span>
                    <Phone size={20} />
                  </span>

                  <div>
                    <b>Call Us</b>
                    <small>{COMPANY.phone}</small>
                  </div>
                </a>

                <a
                  href={COMPANY.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="hoverLift"
                >
                  <span>
                    <MessageCircle size={20} />
                  </span>

                  <div>
                    <b>WhatsApp</b>
                    <small>Chat with us</small>
                  </div>
                </a>

                <a
                  href={`mailto:${COMPANY.email}`}
                  className="hoverLift"
                >
                  <span>
                    <Mail size={20} />
                  </span>

                  <div>
                    <b>Email</b>
                    <small>{COMPANY.email}</small>
                  </div>
                </a>

                <div className="hoverLift">
                  <span>
                    <MapPin size={20} />
                  </span>

                  <div>
                    <b>Location</b>
                    <small>{COMPANY.location}</small>
                  </div>
                </div>
              </div>
            </div>

            <form
              className={styles.form}
              onSubmit={handleSubmit}
            >
              <h3>Request a Service</h3>

              <div className={styles.row}>
                <label>
                  Name
                  <input
                    name="name"
                    placeholder="Your name"
                    required
                  />
                </label>

                <label>
                  Phone
                  <input
                    name="phone"
                    placeholder="Mobile number"
                    required
                  />
                </label>
              </div>

              <label>
                Email
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                />
              </label>

              <label>
                Service
                <select
                  name="service"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Select service
                  </option>

                  <option value="Computer / Laptop Repair">
                    Computer / Laptop Repair
                  </option>

                  <option value="CCTV Installation">
                    CCTV Installation
                  </option>

                  <option value="CCTV Repair">
                    CCTV Repair
                  </option>

                  <option value="Networking">
                    Networking
                  </option>

                  <option value="Website Development">
                    Website Development
                  </option>
                </select>
              </label>

              <label>
                Message
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Tell us about your requirement"
                  required
                />
              </label>

              <button
                type="submit"
                className="primaryButton"
                disabled={loading}
              >
                <Send size={16} />

                {loading ? "Sending..." : "Send Enquiry"}
              </button>

              {success && (
                <p
                  style={{
                    marginTop: "15px",
                    color: "var(--primary)",
                    fontWeight: 600,
                  }}
                >
                  {success}
                </p>
              )}
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}