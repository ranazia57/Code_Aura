import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaPython } from 'react-icons/fa';

const Aboutme = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('slide-up-active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements = document.querySelectorAll('.slide-up');
    animatedElements.forEach(el => observer.observe(el));

    return () => animatedElements.forEach(el => observer.unobserve(el));
  }, []);

  return (
    <section className="bg-gray-700 text-white px-6 py-10 space-y-12 " >
      <style>{`
        .slide-up {
          transform: translateY(40px);
          opacity: 0;
          transition: all 1s ease;
        }
        .slide-up-active {
          transform: translateY(0);
          opacity: 1;
        }
        .section-block {
          padding-bottom: 5rem;
          border-bottom: 1px solid #a3e635;
        }
      `}</style>

      {/* About Us Section */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-12 section-block">
        <div className="space-y-6">
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-slate-200 leading-tight">
            About Us
          </h2>

          <p className="text-lg text-slate-300 leading-relaxed">
            At <span className="text-lime-400 font-semibold">CodeAura</span>, we turn ideas into intelligent digital solutions. Our team excels in cutting-edge technologies — from <span className="text-lime-300 font-medium">React</span> and <span className="text-lime-300 font-medium">WordPress</span> development to advanced <span className="text-lime-300 font-medium">Python</span>-based systems including <span className="text-lime-300 font-medium">AI chatbots</span>, <span className="text-lime-300 font-medium">automation</span>, <span className="text-lime-300 font-medium">machine learning</span>, <span className="text-lime-300 font-medium">deep learning</span>, and <span className="text-lime-300 font-medium">data analysis</span>.
          </p>

          <p className="text-lg text-slate-300 leading-relaxed">
            We also craft efficient <span className="text-lime-300 font-medium">web scraping tools</span>, build smart <span className="text-lime-300 font-medium">browser agents</span>, automate workflows using <span className="text-lime-300 font-medium">n8n</span>, and drive results with targeted <span className="text-lime-300 font-medium">Meta Ads</span>. At <span className="text-lime-400 font-semibold">CodeAura</span>, we’re passionate about creating scalable, smart, and impactful digital experiences.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              to="/project"
              className="bg-lime-400 text-black font-semibold py-3 px-7 rounded-full transition duration-300 transform hover:scale-105 shadow"
            >
              🚀 View Projects
            </Link>
            <Link
              to="/contect"
              className="border border-lime-400 text-lime-400 hover:bg-lime-400 hover:text-black py-3 px-7 rounded-full transition duration-300 transform hover:scale-105 shadow"
            >
              📩 Contact Me
            </Link>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="rounded-3xl overflow-hidden shadow-2xl slide-up">
            <img
              src="../mypic1.png"
              alt="Rana Zia Ul Din"
              className="w-96 h-96 object-cover"
            />
          </div>
        </div>
      </div>

      {/* Our Values Section */}
      <div className="max-w-6xl mx-auto text-center section-block">
        <h3 className="text-4xl font-bold text-lime-400 mb-12">Our Values</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            {
              icon: '🎯',
              title: 'Dedication',
              desc: 'We approach every project with passion and a strong sense of responsibility. Your goals become our focus, and we go the extra mile to make them a reality.',
            },
            {
              icon: '💡',
              title: 'Smart Work',
              desc: 'We combine intelligence and innovation to solve challenges. Our smart workflows reduce waste, save time, and deliver higher-quality outcomes.',
            },
            {
              icon: '⏱',
              title: 'On-Time Delivery',
              desc: 'We understand time is critical. Every milestone is managed through clear planning and timely updates to ensure no deadlines are missed.',
            },
            {
              icon: '🤝',
              title: 'Client Satisfaction',
              desc: 'We build long-term partnerships by delivering real results. Your feedback drives our improvements and your satisfaction drives our success.',
            },
          ].map((val, i) => (
            <div
              key={i}
              className="bg-gray-800 p-6 rounded-xl shadow-lg hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="text-lime-400 text-4xl mb-4">{val.icon}</div>
              <h4 className="text-xl font-semibold text-white mb-3">{val.title}</h4>
              <p className="text-slate-300 text-sm leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Our Services Section */}
      <div className="max-w-6xl mx-auto text-center section-block">
        <h3 className="text-4xl font-bold text-lime-400 mb-12">Our Services</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {[
            {
              icon: <div className="flex justify-center"><FaPython className="text-lime-400 text-4xl mt-2" /></div>,
              title: 'Python Development',
              desc: 'We build powerful backends, automation scripts, and AI-driven systems using Python. Our solutions are designed to scale with your business and provide long-term performance and stability.',
            },
            {
              icon: '⚛',
              title: 'React Development',
              desc: 'We develop clean, responsive, and fast frontends using React and Tailwind. Our reusable components ensure maintainability and great user experience across devices.',
            },
            {
              icon: '🤖',
              title: 'AI Chatbots & Agents',
              desc: 'We create intelligent, task-driven chatbots and browser agents that handle real-time queries, automate processes, and collect structured data seamlessly across platforms.',
            },
            {
              icon: '📊',
              title: 'ML & Automation',
              desc: 'From predictive analytics to automated workflows, we integrate machine learning into your operations, making them smarter, faster, and more data-driven.',
            },
            {
              icon: '🖥',
              title: 'WordPress Development',
              desc: 'Our WordPress team delivers high-performance websites with custom themes, plugins, and secure optimizations tailored to your business needs.',
            },
            {
              icon: '📣',
              title: 'Meta Ads (Facebook)',
              desc: 'We run precision-targeted ad campaigns on Meta platforms, ensuring high ROI, better engagement, and measurable results aligned with your marketing goals.',
            },
          ].map((service, i) => (
            <div
              key={i}
              className="bg-gray-800 p-6 rounded-xl shadow-lg hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="text-lime-400 text-4xl mb-4">{service.icon}</div>
              <h4 className="text-xl font-semibold text-white mb-3">{service.title}</h4>
              <p className="text-slate-300 text-sm leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Our Team Section */}
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-4xl font-bold text-lime-400 mb-12">Our Team</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {[
            {
              img: '../team/nouman.png',
              role: 'Python Developer',
              desc: 'Building AI tools with smart automation.',
            },
            {
              img: '../team/zia.jpg',
              role: 'React Front-End Developer',
              desc: 'Creating sleek and fast user interfaces.',
            },
            {
              img: '../team/abdullah.png',
              role: 'Full Stack Developer',
              desc: 'Delivering complete end-to-end solutions.',
            },
          ].map((member, i) => (
            <div
              key={i}
              className="transition-transform duration-500 transform hover:-translate-y-2 text-center"
            >
              <img
                src={member.img}
                alt={member.role}
                className="w-72 h-72 object-cover rounded-full shadow-2xl slide-up mx-auto"
              />
              <h4 className="mt-4 text-xl font-semibold text-white">{member.role}</h4>
              <p className="text-slate-300 text-sm mt-2">{member.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Aboutme;