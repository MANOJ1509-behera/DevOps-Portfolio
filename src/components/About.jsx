import { motion } from "framer-motion";
import { Code2, Cloud, Rocket } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: <Cloud size={42} />,
      title: "Cloud Architecture",
      description:
        "Designing secure and scalable infrastructure using AWS.",
    },
    {
      icon: <Code2 size={42} />,
      title: "CI/CD Automation",
      description:
        "Building robust automated pipelines for faster and reliable deployments.",
    },
    {
      icon: <Rocket size={42} />,
      title: "Performance & Reliability",
      description:
        "Improving uptime, monitoring systems, and optimizing deployment speed.",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-28 px-6 bg-slate-950 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative max-w-6xl mx-auto p-14 rounded-3xl 
                   bg-slate-900/60 backdrop-blur-xl 
                   border border-slate-700 
                   shadow-[0_0_40px_rgba(56,189,248,0.08)]"
      >
        <h2 className="text-5xl font-bold text-center text-sky-400 mb-12 tracking-wide">
          About Me
        </h2>

        <p className="text-gray-300 text-lg text-center max-w-3xl mx-auto mb-16 leading-relaxed">
          DevOps Engineer with 2+ years of experience at Tech Mahindra,
          specializing in cloud-native architecture, CI/CD automation,
          and infrastructure optimization. Passionate about building
          secure, scalable, and high-performance systems.
        </p>

        {/* Highlight Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{
                y: -10,
                scale: 1.05,
              }}
              className="relative group p-8 rounded-2xl 
                         bg-slate-800/70 backdrop-blur-lg 
                         border border-slate-700 
                         shadow-lg transition duration-300"
            >
              {/* Animated Gradient Border */}
              <div className="absolute inset-0 rounded-2xl border border-transparent 
                              bg-gradient-to-r from-sky-400/0 via-sky-400/30 to-sky-400/0 
                              opacity-0 group-hover:opacity-100 transition duration-500 blur-sm"></div>

              <div className="relative z-10 text-center">
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 3,
                    ease: "easeInOut",
                  }}
                  className="text-sky-400 mb-6 flex justify-center"
                >
                  {item.icon}
                </motion.div>

                <h3 className="text-xl font-semibold mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}