import React, { useState, useEffect } from 'react';
import TypeWriterName from './TypeWriterName';
import { Link } from 'react-router-dom';

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768); // Tailwind md breakpoint
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
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
        <p className="text-slate-100 text-bold md:text-lg mb-6 max-w-xl">
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
  );
};

export default Home;
