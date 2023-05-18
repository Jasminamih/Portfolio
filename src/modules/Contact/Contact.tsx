import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "./Contact.module.scss";
import { slideIn } from "../../utils/Motion";
import emailjs from "@emailjs/browser";
import { F_Open_Sans, F_Ubuntu } from "@/fonts";
import { TextField } from "@mui/material";
import { ThreeDots } from "react-loader-spinner";
import SuccessMessage from "@/elements/SuccessMessage/SuccessMessage";
import ErrorMessage from "@/elements/ErrorMessage/ErrorMessage";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .send(
        "service_nnyj4gi",
        "template_awlnztz",
        {
          from_name: form.name,
          to_name: "Jasmina",
          from_email: form.email,
          to_email: "jasminamihajloska1@gmail.com",
          message: form.message,
        },
        "fWv-iWb4wZ3uwHF1C"
      )

      .then(
        () => {
          setLoading(false);
          setSuccess(true);
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error: any) => {
          setLoading(false);

          setError(true);
        }
      );
  };

  useEffect(() => {
    function handleScroll() {
      const element = document.getElementById("Contact");
      const { top } = element!.getBoundingClientRect();
      if (top < window.innerHeight) {
        setIsVisible(true);
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll, false);
  }, []);

  return (
<>    {success ? <SuccessMessage/>: null}
{error? <ErrorMessage/>: null}    <div id="Contact" className={`${styles.contact} ${F_Open_Sans.className}`}>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        initial="hidden"
        animate={isVisible ? "show" : "hidden"}
        className={styles.contactPage}
      >
        <div className={styles.contactText}>
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>
        </div>
        <div className={`${styles.contactWrapper} ${F_Ubuntu.className}`}>
          <div className={styles.contactOptionsContainer}>
            <div className={styles.contactForm}>
              <form onSubmit={handleSubmit}>
                <div className={styles.inputsWrapper}>
                  <TextField
                    sx={{
                      label: { color: "white" },
                      fieldset: { borderColor: "white" },
                      "& .MuiOutlinedInput-root": {
                        "&.Mui-focused fieldset": {
                          borderColor: "white",
                        },
                        "&:hover fieldset": {
                          borderColor: "white",
                        },
                      },
                    }}
                    className={styles.input}
                    required
                    id="name"
                    value={form.name}
                    label="Name"
                    onChange={handleChange}
                    type={"text"}
                    name="name"
                  />

                  <TextField
                    sx={{
                      label: { color: "white" },
                      fieldset: { borderColor: "white" },
                      "& .MuiOutlinedInput-root": {
                        "&.Mui-focused fieldset": {
                          borderColor: "white",
                        },
                        "&:hover fieldset": {
                          borderColor: "white",
                        },
                      },
                    }}
                    className={styles.input}
                    required
                    id="email"
                    label="E-mail"
                    value={form.email}
                    onChange={handleChange}
                    type={"email"}
                    name="email"
                  />
                </div>
                <TextField
                  sx={{
                    label: { color: "white" },
                    fieldset: { borderColor: "white" },
                    "& .MuiOutlinedInput-root": {
                      "&.Mui-focused fieldset": {
                        borderColor: "white",
                      },
                      "&:hover fieldset": {
                        borderColor: "white",
                      },
                    },
                  }}
                  className={styles.textArea}
                  multiline
                  rows={5}
                  value={form.message}
                  required
                  id="message"
                  label="Message"
                  onChange={handleChange}
                  type={"text"}
                  name="message"
                />

                {loading === true ? (
                  <button className={styles.contactBtnLoading}>
                    {" "}
                    Sending{" "}
                    <ThreeDots
                      height="50"
                      width="50"
                      radius="9"
                      color="#161854"
                      ariaLabel="three-dots-loading"
                      wrapperStyle={{}}
                      wrapperClass=""
                      visible={true}
                    />
                  </button>
                ) : (
                  <button className={styles.contactBtn}>Send</button>
                )}
              </form>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
    </>
  );
};

export default Contact;
