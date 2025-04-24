export default function Contact() {
    return (
      <section id="contact" className="py-20 px-4 text-center">
        <h2 className="text-3xl font-bold text-red-500 mb-4">Contact Me</h2>
        <p className="text-gray-300 mb-6">Feel free to reach out via email or connect with me online.</p>
        <div className="flex flex-col gap-4 items-center">
          <a href="mailto:malithavisada@gmail.com" className="px-6 py-3 bg-red-500 text-white rounded hover:bg-red-600 transition">
            malithavisada@gmail.com
          </a>
          <a href="https://github.com/Malitha-Gunathilaka" target="_blank" className="text-red-500 hover:underline">GitHub: Malitha-Gunathilaka</a>
          <a href="https://www.linkedin.com/in/malithagunathilaka" target="_blank" className="text-red-500 hover:underline">LinkedIn: malithagunathilaka</a>
        </div>
      </section>
    );
  }