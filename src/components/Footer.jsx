import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-slate-950 py-16 px-6 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl"></div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative max-w-6xl mx-auto text-center"
      >
        {/* Name / Branding */}
        <h3 className="text-2xl font-bold text-sky-400 mb-4 tracking-wide">
          Manoj Kumar Behera
        </h3>

        <p className="text-gray-400 mb-8">
          DevOps Engineer | Cloud & Automation Specialist
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-8 mb-8">
          <motion.a
            whileHover={{ scale: 1.2, y: -5 }}
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-sky-400 transition"
          >
            <Github size={24} />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.2, y: -5 }}
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-sky-400 transition"
          >
            <Linkedin size={24} />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.2, y: -5 }}
            href="mailto:your-email@gmail.com"
            className="text-gray-400 hover:text-sky-400 transition"
          >
            <Mail size={24} />
          </motion.a>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-6 text-sm text-gray-500">
          © {new Date().getFullYear()} Manoj Behera. All rights reserved.
        </div>
      </motion.div>
    </footer>
  );
}