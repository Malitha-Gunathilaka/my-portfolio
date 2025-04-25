import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHtml5, 
  faReact, 
  faCss3Alt, 
  faNodeJs, 
  faGithub, 
  faJava,
  faJs
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

export default function Skills() {
  const skills = [
    { name: 'HTML', icon: <FontAwesomeIcon icon={faHtml5} className="text-orange-500" /> },
    { name: 'CSS', icon: <FontAwesomeIcon icon={faCss3Alt} className="text-blue-500" /> },
    { name: 'JavaScript', icon: <FontAwesomeIcon icon={faJs} className="text-yellow-400" /> },
    { name: 'React', icon: <FontAwesomeIcon icon={faReact} className="text-blue-400" /> },
    { name: 'Node.js', icon: <FontAwesomeIcon icon={faNodeJs} className="text-green-500" /> },
    { name: 'Java', icon: <FontAwesomeIcon icon={faJava} className="text-red-500" /> },
    { name: 'C', text: "C", className: "text-blue-300" },
    { name: 'C++', text: "C++", className: "text-blue-700" },
    { name: 'Git/GitHub', icon: <FontAwesomeIcon icon={faGithub} className="text-gray-700" /> },
    { name: 'Database', icon: <FontAwesomeIcon icon={faDatabase} className="text-blue-600" /> },
    
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-to-b from-black-900 to-black-900">
      <div className="max-w-6xl mx-auto w-full">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold text-red-500 mb-16 text-center"
        >
          Technical Skills
        </motion.h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="relative flex flex-col items-center justify-center p-6 rounded-xl bg-gray-800/30 backdrop-blur-sm 
                        border border-gray-700 hover:border-red-500 transition duration-300 group"
            >
              <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
      {skill.icon || <span className={`font-bold ${skill.className}`}>{skill.text}</span>}
    </div>
              <h3 className="text-lg font-semibold text-white text-center">
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}