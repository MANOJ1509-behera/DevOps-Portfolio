import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center text-center px-6">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-bold">
          Hi, I'm <span className="text-sky-400">Manoj Kumar Behera</span>
        </h1>
        <p className="mt-6 text-xl text-gray-400 max-w-2xl">
          DevOps Engineer with 2+ years of experience.
          Specialized in CI/CD, Kubernetes, Docker, AWS & Automation.
        </p>
      </motion.div>
    </section>
  );
}