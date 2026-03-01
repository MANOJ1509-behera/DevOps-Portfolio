import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {

  const projects = [
    {
      title: "CI/CD Automation Pipeline",
      description:
        "Built end-to-end CI/CD pipelines using GitLab, Docker, and Kubernetes. Reduced deployment time by 40%.",
      tech: "GitLab • Docker • Kubernetes • AWS",
      github: "#",
      demo: "#",
    },
    {
      title: "DORA Metrics Dashboard",
      description:
        "Implemented DORA metrics tracking system to monitor deployment frequency, MTTR, and change failure rate.",
      tech: "Node.js • React • MongoDB • Jenkins",
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-slate-900">
      <h2 className="text-4xl font-bold text-center text-sky-400 mb-16">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">

        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ y: -10, scale: 1.03 }}
            className="relative group"
          >

            {/* Gradient Glow Border */}
            <div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-blue-500 rounded-2xl blur opacity-0 group-hover:opacity-40 transition duration-500"></div>

            {/* Card */}
            <div className="relative bg-slate-800/80 backdrop-blur-lg p-8 rounded-2xl border border-slate-700 shadow-xl transition duration-300">

              <h3 className="text-2xl font-semibold mb-4 text-white">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-6">
                {project.description}
              </p>

              <p className="text-sm text-sky-400 mb-6">
                {project.tech}
              </p>

              <div className="flex gap-6">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-sky-400 transition"
                >
                  <Github size={18} />
                  Code
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-sky-400 transition"
                >
                  <ExternalLink size={18} />
                  Live
                </a>

              </div>

            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
}