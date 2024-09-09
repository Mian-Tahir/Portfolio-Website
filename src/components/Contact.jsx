import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      // Process the form
      alert('Form submitted successfully!');
      setFormData({ name: '', email: '', message: '' }); // Clear form
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div id="Contact" className="bg-[#f0f0f0] text-black py-10"> {/* Ensure the ID matches the Link component */}
      <motion.div
        className="container mx-auto px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Heading */}
        <motion.h2
          className="text-4xl font-bold mb-4 text-center"
          whileHover={{ scale: 1.05, color: "#007bff" }}
          transition={{ duration: 0.3 }}
        >
          Get in Touch
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-lg mb-6 text-center"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          We’d love to hear from you! Please fill out the form below, and we’ll get back to you as soon as possible.
        </motion.p>

        {/* Contact Form */}
        <motion.form
          className="max-w-lg mx-auto bg-white p-6 shadow-md rounded-md"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4 }}
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
              type="text"
              id="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleInputChange}
              aria-invalid={!!errors.name}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
              type="email"
              id="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
              aria-invalid={!!errors.email}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
              id="message"
              placeholder="Your message"
              value={formData.message}
              onChange={handleInputChange}
              aria-invalid={!!errors.message}
            />
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
          </div>
          <motion.button
            type="submit"
            className="w-full bg-[#007bff] text-white py-2 px-4 rounded-md hover:bg-blue-700"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Submit
          </motion.button>
        </motion.form>

        {/* Social Media Icons */}
        <div className="flex justify-center mt-8 space-x-4">
          <motion.a
            aria-label="Facebook"
            href="https://www.facebook.com/profile.php?id=100040927500381/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
          >
            <FaFacebook className="text-4xl text-black hover:text-blue-600" />
          </motion.a>
          <motion.a
            aria-label="LinkedIn"
            href="https://www.linkedin.com/in/m-tahir-mahmood?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
          >
            <FaLinkedin className="text-4xl text-black hover:text-blue-600" />
          </motion.a>
          <motion.a
            aria-label="Instagram"
            href="https://www.instagram.com/its_mian178?igsh=ZTR0eDVvZjlkbTk3/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
          >
            <FaInstagram className="text-4xl text-black hover:text-pink-600" />
          </motion.a>
          <motion.a
            aria-label="GitHub"
            href="https://github.com/Mian-Tahir/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
          >
            <FaGithub className="text-4xl text-black hover:text-gray-700" />
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
