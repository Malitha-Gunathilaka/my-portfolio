import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  const [loading, setLoading] = useState(false); // State to manage loading state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setFormData({ name: "", email: "", message: "" });
      alert("Message sent successfully!");
    } catch (error) {
      console.error("Email error:", error);
      alert("Error sending message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-gray-400 mt-4 text-lg">
            Feel free to reach out for collaborations or just a friendly chat
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            {/* WhatsApp Card */}
            <a
              href="https://wa.me/94761621101"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/30 hover:border-red-500/30 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-red-500/10 rounded-lg group-hover:bg-red-500/20 transition-colors">
                  <FontAwesomeIcon icon={faWhatsapp} className="text-2xl text-red-500" />
                </div>
                <div>
                  <h3 className="text-gray-200 font-medium">WhatsApp</h3>
                  <p className="text-gray-400 text-sm">+94 761 621 101</p>
                </div>
              </div>
            </a>

            {/* Email Card */}
            <a
              href="mailto:malithavisada@gmail.com"
              className="block p-6 bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/30 hover:border-red-500/30 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-red-500/10 rounded-lg group-hover:bg-red-500/20 transition-colors">
                  <FiMail className="text-2xl text-red-500" />
                </div>
                <div>
                  <h3 className="text-gray-200 font-medium">Email</h3>
                  <p className="text-gray-400 text-sm">malithavisada@gmail.com</p>
                </div>
              </div>
            </a>

            {/* Location Card */}
            <div className="p-6 bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/30">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-red-500/10 rounded-lg">
                  <FontAwesomeIcon icon={faLocationDot} className="text-2xl text-red-500" />
                </div>
                <div>
                  <h3 className="text-gray-200 font-medium">Location</h3>
                  <p className="text-gray-400 text-sm">Walallavita, Mathugama,<br />kaluthara, Sri Lanka</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-5 mt-8 ">
              <a
                href="https://github.com/Malitha-Gunathilaka"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800/30 rounded-lg hover:bg-red-500/10 transition-colors group"
              >
                <FiGithub className="text-2xl text-gray-400 group-hover:text-red-500" />
              </a>
              <a
                href="https://www.linkedin.com/in/malithagunathilaka"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800/30 rounded-lg hover:bg-red-500/10 transition-colors group"
              >
                <FiLinkedin className="text-2xl text-gray-400 group-hover:text-red-500" />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700/30">
              <h3 className="text-2xl font-semibold text-gray-200 mb-6">Send Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-4 bg-gray-900/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 border border-gray-700/30"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-4 bg-gray-900/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 border border-gray-700/30"
                    required
                  />
                </div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className="w-full p-4 bg-gray-900/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 border border-gray-700/30"
                  required
                ></textarea>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-red-500 to-red-700 text-white py-4 px-8 rounded-lg font-medium hover:from-red-600 hover:to-red-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
