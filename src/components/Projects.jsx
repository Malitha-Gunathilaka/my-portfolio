export default function Projects() {
    return (
      <section id="projects" className="py-20 px-4 text-center">
        <h2 className="text-3xl font-bold text-red-500 mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-900 p-6 rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">Shuttle Rover - IoT Robot Control App</h3>
            <p className="text-gray-400 mt-2">Built a React Native app to control an autonomous shuttlecock-collecting robot in real-time, using ESP8266 and IoT integration.</p>
          </div>
          <div className="bg-gray-900 p-6 rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">BoardingHub Platform</h3>
            <p className="text-gray-400 mt-2">Created a web app using MERN stack to let users find and book boarding places with real-time availability updates.</p>
          </div>
          <div className="bg-gray-900 p-6 rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">Lavendra Tea E-Commerce</h3>
            <p className="text-gray-400 mt-2">Designed a modern tea shop site using React and Tailwind CSS to showcase various tea products with an interactive UI.</p>
          </div>
          <div className="bg-gray-900 p-6 rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">Hotel Booking System</h3>
            <p className="text-gray-400 mt-2">Developed a Java + MySQL app to manage room availability and bookings with authentication features.</p>
          </div>
        </div>
      </section>
    );
  }