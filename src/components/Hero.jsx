import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
// Add your image import
import profileImg from "../assets/My pic/m4.png"; // Update this path to match your image location
import TypeWriter from "./TypeWriter";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa"; // Import any icons you want to use

export default function Hero() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesOptions = {
    fullScreen: { enable: false },
    particles: {
      color: { value: "#ffffff" },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 2,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 2,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
    detectRetina: true,
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: <FaGithub size={35} />,
      url: "https://github.com/yourusername",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin size={35} />,
      url: "https://linkedin.com/in/yourusername",
    },
    {
      name: "Twitter",
      icon: <FaTwitter size={35} />,
      url: "https://twitter.com/yourusername",
    },
    {
      name: "Instagram",
      icon: <FaInstagram size={35} />,
      url: "https://instagram.com/yourusername",
    },
  ];

  return (
    <section className="relative h-screen w-full bg-black overflow-hidden">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        className="absolute inset-0"
      />

<div className="relative z-10 h-full flex items-center px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">

          {/* Text Content - Left Side */}
          <div className="order-2 md:order-1 md:col-span-10 text-center md:text-left flex flex-col">
            {/* Main Content Section */}
            <div className="mb-12 mt-40">
              <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-white">
                Hi, I'm
              </h1>
              <h1 className="text-5xl md:text-7xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">
                Malitha Gunathilaka
              </h1>

              <div className="mb-8">
                <TypeWriter />
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <a
                  href="#projects"
                  className="px-8 py-3 border-2 border-red-500 text-white rounded-full hover:bg-red-600 transition-all duration-300 transform hover:scale-105"
                >
                  View My Work
                </a>
                <a
                  href="#contact"
                  className="px-8 py-3 border-2 border-red-500 text-red-100 rounded-full hover:bg-red-500 hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                  Contact Me
                </a>
              </div>
            </div>

            {/* Social Media Icons Section - Separated with Border */}
            
              <div className="flex items-center justify-center md:justify-start gap-10 mt-15">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-red-500 transform hover:scale-125 transition-all duration-300"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
          </div>

          {/* Image Container - Right Side (4 columns) */}
          <div className="order-1 md:order-2 md:col-span-2 flex justify-end md:justify-center ">
            <div className="relative mt-30 mr-30">
              {/* Image Frame */}
              <div className="relative w-64 h-64 md:w-145 md:h-160  overflow-hidden transform hover:scale-110 transition-all duration-500 hover:rotate-5">
                <img
                  src={profileImg}
                  alt="Malitha Gunathilaka"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
