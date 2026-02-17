import { Mail, Linkedin, Github } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-slate-950 text-center">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-sky-400 mb-6"
      >
        Contact Me
      </motion.h2>

      <p className="text-gray-400 mb-12">
        Open to DevOps & Cloud opportunities.
      </p>

      <div className="flex justify-center gap-10 flex-wrap">

        <motion.a
          whileHover={{ scale: 1.15 }}
          href="mailto:your-email@gmail.com"
          className="flex flex-col items-center gap-3 text-gray-300 hover:text-sky-400"
        >
          <div className="bg-slate-800 p-5 rounded-full shadow-lg hover:shadow-sky-400/40 transition">
            <Mail size={30} />
          </div>
          <span>Email</span>
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.15 }}
          href="https://linkedin.com/in/your-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-3 text-gray-300 hover:text-sky-400"
        >
          <div className="bg-slate-800 p-5 rounded-full shadow-lg hover:shadow-sky-400/40 transition">
            <Linkedin size={30} />
          </div>
          <span>LinkedIn</span>
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.15 }}
          href="https://github.com/your-username"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-3 text-gray-300 hover:text-sky-400"
        >
          <div className="bg-slate-800 p-5 rounded-full shadow-lg hover:shadow-sky-400/40 transition">
            <Github size={30} />
          </div>
          <span>GitHub</span>
        </motion.a>

      </div>
    </section>
  );
}