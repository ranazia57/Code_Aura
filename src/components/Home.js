import React, { useState, useEffect } from 'react';
import TypeWriterName from './TypeWriterName';
import { Link } from 'react-router-dom';
import { FaLaptopCode, FaChartLine  } from 'react-icons/fa';

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768); // Tailwind md breakpoint
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <>
      <section className="relative min-h-screen text-white flex flex-col-reverse md:flex-row items-center justify-start px-6 py-10 gap-10 overflow-hidden">
        {/* Background Video or Image */}
        {!isMobile ? (
          <video
            autoPlay
            muted
            loop
            className="absolute top-0 left-0 w-full h-full object-cover -z-10"
          >
            <source src="../video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img
            src="../home.png" // Apni mobile friendly background image yahan add karen
            alt="Background"
            className="absolute top-0 left-0 w-full h-full object-cover -z-10"
          />
        )}

        {/* Text Content */}
        <div className="text-left max-w-2xl pb-32 ml-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-lime-400 hover:scale-105 transition-transform duration-500 h-16">
            There's <span className="text-lime-400"><TypeWriterName /></span>
          </h1>
          <p className="text-slate-100 font-semibold md:text-lg mb-6 max-w-xl leading-relaxed">
            From stunning WordPress websites to dynamic front-end experiences built with React, Python, JavaScript, HTML & CSS — to AI-powered tools like chatbots, smart agents, automated workflows (n8n), data analysis, web scraping, and browser automation.
            We also run high-performing Facebook (Meta) ad campaigns to grow your brand fast.
            Let’s turn your idea into a digital success story.
          </p>
          <div className="flex flex-row justify-start gap-4 flex-wrap">
            <Link
              to="/contect"
              className="bg-lime-400 text-black font-semibold py-2 px-6 rounded-full hover:bg-lime-500 transition-transform transform hover:scale-105 duration-300 ease-out"
            >
              Let's Work Together
            </Link>
            <Link
              to="/project"
              className="border border-lime-400 text-lime-400 py-2 px-6 rounded-full hover:bg-lime-400 hover:text-black transition-transform transform hover:scale-105 duration-300 ease-out"
            >
              View Projects
            </Link>
          </div>
        </div>
      </section>

      {/* New Section 1 - Services */}
      <section className="bg-gradient-to-r from-lime-900 via-lime-800 to-lime-900 text-white px-6 py-20 md:py-28">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-12 tracking-wide drop-shadow-lg">
            What I Can Do For You
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="bg-lime-700 bg-opacity-30 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <FaLaptopCode className="mx-auto text-5xl mb-6 text-lime-300" />
              <h3 className="text-2xl font-semibold mb-4">Web Development</h3>
              <p className="text-lime-200 leading-relaxed">
                Custom WordPress and React websites tailored to your brand, fully responsive and optimized for performance.
              </p>
            </div>
            <div className="bg-lime-700 bg-opacity-30 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <FaChartLine className="mx-auto text-5xl mb-6 text-lime-300" />
              <h3 className="text-2xl font-semibold mb-4">Digital Marketing</h3>
              <p className="text-lime-200 leading-relaxed">
                High-impact Facebook (Meta) ad campaigns and SEO strategies to grow your audience and boost conversions.
              </p>
            </div>
            <div className="bg-lime-700 bg-opacity-30 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <FaLaptopCode className="mx-auto text-5xl mb-6 text-lime-300" />
              <h3 className="text-2xl font-semibold mb-4">AI & Automation</h3>
              <p className="text-lime-200 leading-relaxed">
                AI-powered chatbots, automated workflows, data analysis, and web scraping to streamline your business processes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* New Section 2 - Contact Call to Action */}
      <section className="bg-gray-900 text-white px-6 py-20 md:py-28">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-6 text-lime-400 drop-shadow-md">
            Ready to Elevate Your Digital Presence?
          </h2>
          <p className="text-slate-300 md:text-lg mb-10 max-w-3xl mx-auto leading-relaxed">
            Whether you have a project in mind or just want to say hello, I’m here to help you bring your ideas to life with creativity and expertise.
          </p>
          <Link
            to="/contect"
            className="inline-block bg-lime-400 text-black font-semibold py-4 px-10 rounded-full shadow-lg hover:bg-lime-500 transition-transform transform hover:scale-105 duration-300 ease-out"
          >
            Contact Me
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;