import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { FaArrowRight, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import { Mail, MessageSquareText, User } from 'lucide-react';

const Contact = (props) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_zs9iler',
      'template_z6sbczd',
      form.current,
      'Z0BHsra5m-_xSkOYy'
    ).then(
      (result) => {
        props.showAlert("Message sent successfully", "success");
        form.current.reset();
      },
      (error) => {
        props.showAlert("Something went wrong", "error" + error.text);
      }
    );
  };

  return (
    <section className="min-h-screen bg-gray-700 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">

        {/* Left Side - Contact Info */}
        <div className="space-y-6 bg-gray-800 border border-lime-400 rounded-xl p-6 flex flex-col justify-center h-full">
          <h3 className="text-3xl font-bold text-lime-400">Get In Touch</h3>
          <p className="text-slate-300">
            I’m available for freelance work. Let's connect!
          </p>
          <div className="space-y-4 text-lg">
            <p className="flex items-center gap-3">
              <FaEnvelope className="text-lime-400" /> rana@example.com
            </p>
            <p className="flex items-center gap-3">
              <FaPhoneAlt className="text-lime-400" /> +92 123 4567890
            </p>
            <p className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-lime-400" /> Lahore, Pakistan
            </p>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col justify-center border border-lime-400 rounded-xl p-6 bg-gray-800 h-full"
        >
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-slate-300 mb-4 text-center">
            Contact Me
          </h2>

          {/* Name Field */}
          <div className="relative mb-4">
            <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-lime-500">
              <User size={20} />
            </span>
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full pl-12 p-4 bg-white border-2 border-lime-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 transition-all text-black"
            />
          </div>

          {/* Email Field */}
          <div className="relative mb-4">
            <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-lime-500">
              <Mail size={20} />
            </span>
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full pl-12 p-4 bg-white border-2 border-lime-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 transition-all text-black"
            />
          </div>

          {/* Message Field */}
          <div className="relative mb-4">
            <span className="absolute left-4 top-4 text-lime-500">
              <MessageSquareText size={20} />
            </span>
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              className="w-full pl-12 p-4 bg-white border-2 border-lime-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 transition-all resize-none text-black"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center mt-2">
            <button
              className="relative inline-flex items-center justify-center px-10 py-2.5 overflow-hidden tracking-tighter text-white bg-gray-800 rounded-md group"
            >
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-lime-700 rounded-full group-hover:w-56 group-hover:h-56"></span>
              <span className="absolute bottom-0 left-0 h-full -ml-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-auto h-full opacity-100 object-stretch" viewBox="0 0 487 487">
                  <path fillOpacity=".1" fillRule="nonzero" fill="#FFF" d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z"></path>
                </svg>
              </span>
              <span className="absolute top-0 right-0 w-12 h-full -mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="object-cover w-full h-full" viewBox="0 0 487 487">
                  <path fillOpacity=".1" fillRule="nonzero" fill="#FFF" d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z"></path>
                </svg>
              </span>
              <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-200"></span>
              <span className="relative text-base font-semibold flex">
                send message <FaArrowRight className='ml-2 mt-1.5'/>
              </span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
