export default function Projects() {
  const projects = [
    {
      title: "Shuttle Rover - IoT Robot Control App",
      description: "Built a React Native app to control an autonomous shuttlecock-collecting robot in real-time, using ESP8266 and IoT integration.",
      techStack: ["React Native", "IoT", "ESP8266", "Firebase"],
      github: "https://github.com/Malitha-Gunathilaka/ShuttleRover-Project",
      live: "https://shuttle-rover-demo.com",
      image: "/project/shuttle1.jpg"
    },
    {
      title: "BoardingHub",
      description: "Created a web app using MERN stack to let users find and book boarding places with real-time availability updates.",
      techStack: ["MongoDB", "Express", "React", "Node.js"],
      github: "https://github.com/Malitha-Gunathilaka/BoardingHub_React",
      live: "https://boardinghub.netlify.app/",
      image: "/project/boarding.png"
    },
    {
      title: "Lavendra Tea E-Commerce",
      description: "Designed a modern tea shop site using React and Tailwind CSS to showcase various tea products with an interactive UI.",
      techStack: ["React", "Tailwind CSS", "Stripe", "Firebase"],
      github: "https://github.com/Malitha-Gunathilaka/Lavendra",
      live: "https://lavendra-tea.netlify.app/",
      image: "/project/lavendra.png"
    },
    {
      title: "Hotel Booking System",
      description: "Developed a Java + MySQL app to manage room availability and bookings with authentication features.",
      techStack: ["Java", "MySQL", "Spring Boot", "JWT"],
      github: "https://github.com/Malitha-Gunathilaka/BoardingHub_Java",
      live: "https://hotel-booking-five-iota.vercel.app/",
      image: "/project/hotel.png"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-red-500 mb-12 text-center">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-900/50 rounded-xl overflow-hidden backdrop-blur-sm border border-gray-400 hover:border-red-500/70 transition-all duration-300"
            >
              <div className="relative h-70 overflow-hidden ">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm bg-red-500/10 text-red-400 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white hover:text-red-400 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white hover:text-red-400 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                    </svg>
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}