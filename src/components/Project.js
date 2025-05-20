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
    title: "AI Bot Framework (Coming Soon)",
    description:
      "This section will include AI agents, bots, automation tools built using Python, ML, and OpenAI APIs.",
    images: ["../python/ai_placeholder.png"],
    benefits: [
      "Planned: ML-powered automation",
      "Planned: Custom AI chatbot",
      "Planned: Web scraping bots",
    ],
    github: "#",
    techUsed: ["Python", "OpenAI API", "Flask", "Selenium"],
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
