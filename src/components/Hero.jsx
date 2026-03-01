import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import profile from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 bg-slate-950 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 w-[450px] h-[450px] bg-sky-500/15 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-blue-600/15 rounded-full blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE - TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight whitespace-nowrap">
            Hi, I'm <span className="text-sky-400">Manoj Behera</span>
          </h1>

          {/* Professional Typing Animation */}
          <div className="mt-6 text-xl sm:text-2xl text-sky-400 font-medium">
            <TypeAnimation
              sequence={[
                "DevOps Engineer",
                2000,
                "Hands-on with Kubernetes & Terraform",
                2000,
                "CI/CD & Automation Practitioner",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p className="mt-8 text-gray-400 text-lg leading-relaxed max-w-xl">
            DevOps Engineer with 2+ years of hands-on experience in building 
            CI/CD pipelines, managing containerized applications, and 
            supporting cloud infrastructure. Focused on improving deployment 
            efficiency and system reliability.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-6">
            <a
              href="#contact"
              className="px-8 py-3 bg-sky-500 hover:bg-sky-600 transition rounded-full text-white font-medium shadow-lg"
            >
              Contact Me
            </a>

            <a
              href="#projects"
              className="px-8 py-3 border border-sky-500 text-sky-400 hover:bg-sky-500 hover:text-white transition rounded-full font-medium"
            >
              View Projects
            </a>
          </div>
        </motion.div>

        {/* RIGHT SIDE - IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mt-12 md:mt-0"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-400 to-blue-500 blur-xl opacity-50 animate-pulse"></div>

            <img
              src={profile}
              alt="Manoj Behera"
              className="relative w-60 sm:w-72 h-60 sm:h-72 object-cover rounded-full border-4 border-sky-400 shadow-2xl"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}   