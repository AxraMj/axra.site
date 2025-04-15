import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [initialized, setInitialized] = useState(false);

  // Initialize EmailJS
  useEffect(() => {
    const initializeEmailJS = async () => {
      try {
        const publicKey = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;
        console.log('Attempting to initialize EmailJS...');

        if (!publicKey) {
          throw new Error('EmailJS public key is missing in environment variables');
        }

        // Initialize without validation of key format
        emailjs.init({
          publicKey: publicKey,
          limitRate: true,
        });

        setInitialized(true);
        console.log('EmailJS initialized successfully');
      } catch (error) {
        console.error('EmailJS Initialization Error:', error.message);
        alert('Failed to initialize contact form. Please check the configuration.');
      }
    };

    initializeEmailJS();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!initialized) {
      alert('The contact form is still initializing. Please try again in a moment.');
      return;
    }

    setLoading(true);

    try {
      const serviceId = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;

      if (!serviceId || !templateId) {
        throw new Error('Missing service ID or template ID');
      }

      const templateParams = {
        from_name: form.from_name,
        from_email: form.from_email,
        message: form.message,
        to_name: "Akshara",
        to_email: "akjmanoj24@gmail.com",
      };

      console.log('Attempting to send email...');
      
      const result = await emailjs.send(
        serviceId,
        templateId,
        templateParams
      );

      console.log('Email sent successfully:', result);
      setLoading(false);
      alert("Thank you. I will get back to you as soon as possible.");

      setForm({
        from_name: "",
        from_email: "",
        message: "",
      });
    } catch (error) {
      setLoading(false);
      console.error('Send Error:', error);

      let errorMessage = 'Failed to send message. ';
      if (error?.status === 404) {
        errorMessage += 'Please verify your EmailJS configuration (service ID and template ID).';
      } else if (error?.text) {
        errorMessage += error.text;
      } else {
        errorMessage += error.message || 'Please try again.';
      }

      alert(errorMessage);
    }
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='from_name'
              value={form.from_name}
              onChange={handleChange}
              placeholder="What's your name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              required
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='from_email'
              value={form.from_email}
              onChange={handleChange}
              placeholder="What's your email address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              required
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What would you like to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              required
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:bg-tertiary/80 transition-colors'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");