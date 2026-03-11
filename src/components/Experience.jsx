import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export default function Experience() {

  const experiences = [
    {
      company: "Tech Mahindra",
      role: "DevOps Engineer",
      duration: "2023 - Present",
      description: [
        "Designed GitLab CI/CD pipelines using effective branching strategies for streamlined releases.",
        "Implemented DevSecOps pipelines with integrated security and quality checks before deployment",
        "Managed Kubernetes clusters and deployed containerized applications.",
        "Automated Kubernetes deployments using Helm charts.",
        "Deployed BPMN platform across development, staging, and production environments.",
        "Tracked deployment performance using DORA metrics."
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 px-6 bg-slate-950">
      <h2 className="text-4xl font-bold text-center text-sky-400 mb-16">
        Experience
      </h2>

      <div className="relative max-w-4xl mx-auto">

        {/* Vertical Line */}
        <div className="absolute left-5 top-0 h-full w-1 bg-gradient-to-b from-sky-400 to-blue-600 rounded"></div>

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative pl-16 mb-16"
          >

            {/* Icon */}
            <div className="absolute left-0 top-2 bg-slate-800 p-3 rounded-full border-2 border-sky-400 shadow-lg">
              <Briefcase className="text-sky-400" size={20} />
            </div>

            {/* Card */}
            <div className="bg-slate-800/80 backdrop-blur-lg p-8 rounded-2xl border border-slate-700 shadow-xl hover:shadow-sky-400/40 transition duration-300">

              <h3 className="text-2xl font-semibold text-white">
                {exp.role}
              </h3>

              <p className="text-sky-400 mt-2">
                {exp.company} | {exp.duration}
              </p>

              <ul className="mt-6 text-gray-400 space-y-3">
                {exp.description.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-sky-400">▹</span>
                    {point}
                  </li>
                ))}
              </ul>

            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
}