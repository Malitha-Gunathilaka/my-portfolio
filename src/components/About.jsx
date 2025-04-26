import profileImg from "../assets/My pic/m8.png";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image Column */}
          <div className="w-full">
            <div className="relative">
              <div className="w-full h-[500px] overflow-hidden rounded-lg flex items-center justify-center">
                <img
                  src={profileImg}
                  alt="Profile"
                  className="w-auto h-auto max-w-full max-h-full object-contain"
                />
              </div>
              <div className="absolute inset-0 bg-red-500 rounded-lg -z-10 transform translate-x-3 translate-y-3"></div>
            </div>
          </div>

          {/* Content Column */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-red-500 mb-8 ">About Me</h2>

            <h3 className="text-4xl font-bold text-white mb-8">
              <div className="animate-hello">
                {"Hello!".split("").map((letter, index) => (
                  <span
                    key={index}
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    {letter}
                  </span>
                ))}
              </div>
            </h3>

            <p className="text-gray-300 text-lg leading-relaxed">
            I'm Malitha Gunathilaka — a passionate software developer with a BSc in Physical Science (ICT) from the University of Kelaniya. 
            <p>I specialize in building impactful digital solutions through web and mobile applications, full-stack systems, and IoT-based innovations. With hands-on experience in React, Node.js, JavaScript, Arduino, and ESP32, I enjoy blending hardware and software to solve real-world problems.</p>
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
            Whether it's creating seamless user interfaces, crafting robust backends, or integrating smart devices, I’m driven by curiosity, creativity, and the challenge of making tech work beautifully.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
