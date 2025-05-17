import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay"; 
import { XIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "NoteSphere",
    description: "NoteSphere is a full-stack note management web app that allows users to securely register, log in, and manage personal notes from anywhere, anytime — powered by robust authentication and real-time database operations.",
    images: [
      "../notes/home.png",
      "../notes/about.png",
      "../notes/addnote.png",
      "../notes/saved.png",
      "../notes/login.png",
      "../notes/signup.png"
    ],
    benefits: [
      "🔐 Secure user authentication with password hashing (bcrypt + salt)",
      "🗂️ Full CRUD operations for creating, reading, updating, and deleting notes",
      "☁️ Cloud-stored notes accessible from any device via login",
      "🧠 Clean and intuitive user interface for smooth experience",
      "🛠️ Built with MERN stack: MongoDB, Express, React, and Node.js"
    ],
    github: "https://github.com/ranazia57/NoteSphere",
    live: "",
    techUsed: ["React", "Node.js", "MongoDB", "Express", "Tailwind"]
  },
  {
    title: "NewsHive",
    description: "NewsHive is a dynamic news application that fetches real-time headlines across multiple categories using API integration, featuring infinite scrolling, top-loading indicators, and user-friendly navigation for a seamless reading experience.",
    images: [
      "../news/home.png",
      "../news/tloader.png",
      "../news/bloader.png",
      "../news/home1.png"
    ],
    benefits: [
      "⚡ Real-time news updates fetched daily via API integration",
      "🌀 Infinite scroll with smooth user experience for continuous browsing",
      "📊 Category-based filtering (Sports, Science, Entertainment, General, etc.)",
      "🔼 Top loading bar and bottom spinner to indicate content loading",
      "🕒 Each article includes publish date, time, and a “Read More” call-to-action"
    ],
    github: "https://github.com/ranazia57/NewsHive",
    live: "",
    techUsed: ["React", "NewsAPI", "Tailwind"]
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
      "../aura/product.png"
    ],
    benefits: [
      "🧴 Separate product categories for Men’s and Women’s perfumes",
      "🛒 Fully functional Add to Cart feature for easy shopping experience",
      "🌓 Built-in Dark/Light mode toggle for personalized viewing",
      "📝 Dedicated blog section with daily content updates",
      "🧭 Responsive layout with structured header and footer navigation"
    ],
    github: "https://github.com/ranazia57/react-project",
    live: "",
    techUsed: ["React", "Node.js", "Tailwind", "Express"]
  },
  {
    title: "TextUtils",
    description: "TextUtils is a powerful React-based text analyzer tool that offers real-time text manipulation, email extraction and filtering, and user-friendly utilities like word count, theme toggle, and live preview for a smooth and productive experience.",
    images: [
      "../text/home.png",
      "../text/dhome.png",
      "../text/about.png",
      "../text/dabout.png"
    ],
    benefits: [
      "🔠 Convert text to Uppercase / Lowercase, remove extra spaces, and clear text",
      "📧 Email extractor and smart email word filter to manage sensitive info",
      "🧮 Instant word and character count, plus live text preview section",
      "🌓 Support for Dark/Light mode to reduce eye strain",
      "🔍 Functional search bar in navbar and an informative About Us page"
    ],
    github: "https://github.com/ranazia57/TextUtils",
    live: "",
    techUsed: ["React", "BootStrap" , "JavaScript"]
  }
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

  return (
    <div className="bg-black min-h-screen py-10 px-4 text-white">
      <h1 className="text-4xl font-bold text-green-400 text-left ml-6 sm:ml-24 mb-10">
        My Projects
      </h1>
      <div className="grid gap-10 max-w-6xl mx-auto px-2 sm:px-0 ">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="p-4 sm:p-6 bg-white/10 rounded-2xl shadow-lg w-full overflow-hidden"
          >
            <h2 className="text-2xl font-bold text-green-400 mb-2">
              {project.title}
            </h2>
            <p className="text-slate-300 mb-4 text-sm sm:text-base">
              {project.description}
            </p>

            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation
              pagination={{ clickable: true }}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              className="rounded-xl overflow-hidden"
            >
              {project.images.map((img, imgIdx) => (
                <SwiperSlide key={imgIdx}>
                  <img
                    src={img}
                    alt={`Project screenshot ${imgIdx + 1}`}
                    className="w-full h-60 sm:h-[400px] object-contain bg-white/10 cursor-pointer rounded"
                    onClick={() => handleImageClick(img)}
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="mt-6">
              <h3 className="text-lg font-semibold text-white mb-2">Key Benefits:</h3>
              <ul className="list-disc list-inside text-slate-300 space-y-1 text-sm sm:text-base">
                {project.benefits.map((point, index) => (
                  <li key={index}>✔ {point}</li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold text-white mb-2">Tech Used:</h3>
              <div className="flex flex-wrap gap-2">
                {project.techUsed.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-green-400 text-black px-3 py-1 rounded-full text-xs sm:text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                to={project.github}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 bg-green-400 text-black rounded-lg shadow hover:bg-green-500 transition text-sm"
              >
                GitHub Code
              </Link>
              <button
                disabled
                className="px-4 py-2 bg-gray-600 text-white rounded-lg cursor-not-allowed text-sm"
              >
                Live Demo (Coming Soon)
              </button>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-white/10 bg-opacity-80 flex items-center justify-center z-50 px-4">
          <div className="relative w-full max-w-4xl">
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 bg-green-400 p-2 rounded-full text-white hover:bg-green-500 transition"
            >
              <XIcon className="h-6 w-6" />
            </button>

            <img
              src={currentImage}
              alt="Full preview"
              className="w-full max-h-[80vh] object-contain rounded-xl"
            />
          </div>
        </div>
      )}
    </div>
  );
}
