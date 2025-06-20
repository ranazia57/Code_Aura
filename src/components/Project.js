import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { XIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

const mernProjects = [
  {
    title: "GoldenCity",
   description:
  "GoldenCity is a web platform where users can invest and trade in real estate using cryptocurrency. Own fractional shares of premium properties via NFTs, starting with just $10—secure, transparent, and accessible to everyone.",
    images: [
      "../realstate/1.jpg",
      "../realstate/2.jpg",
      "../realstate/3.jpg",
      "../realstate/4.jpg",
      "../realstate/5.jpg",
      "../realstate/6.jpg",
    ],
  benefits: [
    "Invest in real estate with cryptocurrency",
    "Own fractional shares of premium properties via NFTs",
    "Start investing with as little as $10",
    "Trade property shares easily and securely",
    "Transparent, blockchain-backed transactions",
  ],
    github: "https://github.com/AbdulahBashir/realstate.git",
    techUsed: ["React", "Node.js", "MongoDB", "Express", "Tailwind"],
  },
  {
    title: "DKC B2B Portal",
   description:
  "DKC Buyer ttps://github.com/ranazia57/NoteSpherePartnership Portal is a B2B platform connecting buyers and partners with Kashmiri crafts businesses for the USA market. It streamlines partnerships, registration, and appointment booking for efficient international trade.",
    images: [
      "../b2b/1.jpg",
      "../b2b/2.jpg",
      "../b2b/3.jpg",
      "../b2b/4.jpg",
      "../b2b/5.jpg",
      "../b2b/6.jpg",
      "../b2b/7.jpg",
      "../b2b/8.jpg",
      "../b2b/9.jpg",
      "../b2b/10.jpg",
    ],
    benefits: [
  "Centralized B2B hub",
  "Direct USA partnerships",
  "Easy registration & booking",
  "Streamlined buyer-artisan communication",
  "Digital exposure for Kashmiri crafts",
],
    github: "https://github.com/AbdulahBashir/b2b.git",
    techUsed: ["React", "Node.js", "MongoDB", "Express", "Tailwind"],
  },
  {
    title: "NoteSphere",
    description:
      "NoteSphere is a full-stack note management web app that allows users to securely register, log in, and manage personal notes from anywhere, anytime — powered by robust authentication and real-time database operations.",
    images: [
      "../notes/home.png",
      "../notes/about.png",
      "../notes/addnote.png",
      "../notes/saved.png",
      "../notes/login.png",
      "../notes/signup.png",
    ],
    benefits: [
      "Secure user authentication with bcrypt",
      "Full CRUD operations",
      "Cloud-stored notes",
      "Clean UI",
      "MERN Stack",
    ],
    github: "https://github.com/ranazia57/NoteSphere",
    techUsed: ["React", "Node.js", "MongoDB", "Express", "Tailwind"],
  },
  {
    title: "NewsHive",
    description: "NewsHive is a dynamic news application that fetches real-time headlines across multiple categories using API integration, featuring infinite scrolling, top-loading indicators, and user-friendly navigation for a seamless reading experience.",
    images: [
      "../news/home.png",
      "../news/tloader.png",
      "../news/bloader.png",
      "../news/home1.png",
    ],
    benefits: [
      "Real-time news updates",
      "Infinite scroll",
      "Category-based filtering",
      "Top/Bottom loading indicators",
      "Date & Read More button",
    ],
    github: "https://github.com/ranazia57/NewsHive",
    techUsed: ["React", "NewsAPI", "Tailwind"],
  },
  {
    title: "Aura by AZ",
    description: "Aura by AZ is a modern fragrance website offering perfumes for men and women, complete with dark/light mode support, blog updates, and a seamless add-to-cart experience — all wrapped in a sleek, responsive layout.",
    images: [
      "../aura/home.png",
      "../aura/about.png",
      "../aura/blog.png",
      "../aura/contect.png",
      "../aura/login.png",
      "../aura/sighup.png",
      "../aura/product.png",
    ],
    benefits: [
      "Separate Men/Women perfumes",
      "Add to Cart",
      "Dark/Light Mode",
      "Blog Section",
      "Responsive layout",
    ],
    github: "https://github.com/ranazia57/react-project",
    techUsed: ["React", "Node.js", "Tailwind", "Express"],
  },
  {
    title: "TextUtils",
    description: "TextUtils is a powerful React-based text analyzer tool that offers real-time text manipulation, email extraction and filtering, and user-friendly utilities like word count, theme toggle, and live preview for a smooth and productive experience.",
    images: [
      "../text/home.png",
      "../text/dhome.png",
      "../text/about.png",
      "../text/dabout.png",
    ],
    benefits: [
      "Text manipulation tools",
      "Email extractor",
      "Word/Character count",
      "Dark/Light Mode",
      "Search bar",
    ],
    github: "https://github.com/ranazia57/TextUtils",
    techUsed: ["React", "BootStrap", "JavaScript"],
  },
];

const pythonProjects = [
  {
    title: "Smart Hotel Analytics & Revenue Platform",
    description:
      "HotelIntel is a comprehensive hotel analytics and revenue management tool designed to help hotels monitor performance, forecast future trends, and make data-driven decisions. The platform offers powerful dashboards, AI-driven insights, and competitor analysis — all accessible through an intuitive interface.",
    images: [
      "../hotel/1.jpg",
      "../hotel/3.jpg",
      "../hotel/4.jpg",
      "../hotel/5.jpg",
      "../hotel/6.jpg",
      "../hotel/2.jpg",
    ],
    benefits: [
      "Dashboard with RevPAR, ADR, Occupancy & Revenue",
      "Historical & AI-driven forecasts",
      "AI assistant with OpenAI & custom data chat",
      "Auto-generated performance reports",
      "Competitor rate scraping from Booking.com",
      "Date filters for trend analysis",
      "Clean, user-friendly UI",
    ],
    github: "#",
    techUsed: ["Python", "OpenAI API", "Django", "React js", "Rest API", "Mongo DB"],
  },
  {
    title: "Smart DataVision",
    description:
      "DataVision is a smart, AI-powered data analysis tool that allows users to upload their datasets, visualize trends through interactive dashboards, and gain meaningful insights via OpenAI-powered chat — all in one intuitive interface.",
    images: [
      "../analize/1.jpg",
      "../analize/3.jpg",
      "../analize/4.jpg",
      "../analize/5.jpg",
      "../analize/2.jpg",
    ],
    benefits: [
      "Easy data upload with a simple interface",
      "Interactive dashboards with graphs",
      "AI insights powered by OpenAI",
      "Chat naturally with your data",
      "Secure OpenAI API key setup",
      "Clean, responsive UI for smooth use",
    ],
    github: "#",
    techUsed: ["Python", "OpenAI API", "Flask", "HTML5", "CSS3", "SQL", "JavaScript"],
  },
  {
    title: "HotelIQ ",
    description:
      "HotelIQ is a full-stack hotel intelligence web app that lets users enter a hotel URL, check-in date, number of days, and nights to fetch real-time hotel rates and reviews — powered by dynamic scraping and clean data visualization.",
    images: [
      "../hotelrate/1.jpg",
      "../hotelrate/2.jpg",
      "../hotelrate/3.jpg",
    ],
    benefits: [
      "Real-time hotel data scraping",
      "Custom check-in and duration inputs",
      "Interactive review and pricing display",
      "Clean, responsive UI",
      "Flask, HTML, CSS, and JavaScript stack",
    ],
    github: "#",
    techUsed: ["Python", "OpenAI API", "Flask", "HTML5", "CSS3", "SQL", "JavaScript"],
  },
  {
    title: "AIAgentPro",
    description:
      "AIAgentPro is a smart AI-powered project analysis assistant under the brand AI Services Agency. It helps clients streamline project planning by collecting essential details such as project name, description, budget, timeline, type, and priority — and generates a deep analysis report using OpenAIs intelligence.",
    images: [
      "../aiagent/1.jpg",
    ],
    benefits: [
      "Smart project analysis using OpenAI’s API",
      "Collects key inputs: name, description, budget, timeline, type, and priority",
      "Generates detailed, structured project documentation automatically",
      "Allows secure OpenAI API key setup",
      "Saves time with automated project scope creation",
      "Clean, minimal interface for a smooth user journey",
    ],
    github: "#",
    techUsed: ["Python", "OpenAI API", "HTML5", "CSS3", "SQL", "JavaScript"],
  },
  {
    title: "InsightPilot ",
    description:
      "InsightPilot is a powerful AI-driven data visualization assistant that allows users to upload CSV or Excel datasets, visualize them through interactive dashboards, and explore deep insights using AI-powered natural language chat. Users can configure models like Meta-LLaMA or others via API keys and ask questions directly about their data — turning complex data into actionable understanding.",
    images: [
      "../aiagent2/1.jpg",
      "../aiagent2/2.jpg",
      "../aiagent2/3.jpg",
    ],
    benefits: [
      "Upload CSV/Excel datasets with ease",
      "AI-powered data chat and auto insights",
      "Interactive dashboards and graphs",
      "Multiple LLM model options (e.g., Meta-LLaMA)",
      "Secure API key configuration (Together AI, E2B)",
      "Simple drag-and-drop interface",
      " Real-time question-answering on your uploaded data",
    ],
    github: "#",
    techUsed: ["Python", "OpenAI API", "HTML5", "CSS3", "SQL", "JavaScript"],
  },
];

export default function Projects() {
  const [showModal, setShowModal] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const handleImageClick = (img) => {
    setCurrentImage(img);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentImage("");
  };

  const renderProjectCard = (project, idx) => (
    <div
      key={idx}
      className="p-6 bg-white/10 rounded-2xl shadow-xl hover:shadow-2xl transition-all"
    >
      <h2 className="text-2xl font-bold text-lime-400 mb-3">{project.title}</h2>
      <p className="text-slate-200 text-sm mb-4">{project.description}</p>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500 }}
        className="rounded-xl mb-4"
      >
        {project.images.map((img, imgIdx) => (
          <SwiperSlide key={imgIdx}>
            <img
              src={img}
              onClick={() => handleImageClick(img)}
              className="w-full h-64 object-contain rounded-lg cursor-pointer bg-black/20"
              alt="project"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <h3 className="text-white font-semibold">Key Benefits:</h3>
      <ul className="text-slate-300 text-sm list-disc list-inside space-y-1">
        {project.benefits.map((b, i) => (
          <li key={i}>✔ {b}</li>
        ))}
      </ul>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.techUsed.map((tech, i) => (
          <span
            key={i}
            className="bg-lime-400 text-black px-3 py-1 rounded-full text-xs"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-4 flex gap-4">
        <Link
          to={project.github}
          className="px-4 py-2 bg-lime-400 text-black rounded shadow hover:bg-lime-500 text-sm"
          target="_blank"
        >
          GitHub Code
        </Link>
        <button
          disabled
          className="px-4 py-2 bg-gray-600 text-white rounded cursor-not-allowed text-sm"
        >
          Live Demo (Coming Soon)
        </button>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-700 min-h-screen px-4 py-10 text-white">
      <h1 className="text-4xl font-bold text-lime-400 mb-10 text-center">My Projects</h1>

      <div className="max-w-6xl mx-auto space-y-16">
        <section>
          <h2 className="text-3xl text-lime-300 font-semibold mb-6 border-b border-lime-400 pb-2">
            MERN Stack Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {mernProjects.map(renderProjectCard)}
          </div>
        </section>

        <section>
          <h2 className="text-3xl text-lime-300 font-semibold mb-6 border-b border-lime-400 pb-2">
            Python-Based Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {pythonProjects.map(renderProjectCard)}
          </div>
        </section>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 bg-lime-400 p-2 rounded-full"
            >
              <XIcon className="h-6 w-6 text-black" />
            </button>
            <img
              src={currentImage}
              alt="Preview"
              className="w-full max-h-[80vh] object-contain rounded-xl"
            />
          </div>
        </div>
      )}
    </div>
  );
}