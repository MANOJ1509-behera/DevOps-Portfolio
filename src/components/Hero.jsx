import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">

      {/* IMAGE FIRST */}
      <motion.img
        src={profile}
        alt="Manoj Behera"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="w-56 h-56 object-cover rounded-full border-4 border-sky-400 shadow-xl mb-8"
      />

      {/* DETAILS BELOW */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-5xl font-bold"
      >
        Hi, I'm <span className="text-sky-400">Manoj Behera</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-6 text-xl text-gray-400 max-w-2xl"
      >
        DevOps Engineer with 2+ years of experience in CI/CD,
        Kubernetes, Docker, AWS & Automation.
      </motion.p>

    </section>
  );
}