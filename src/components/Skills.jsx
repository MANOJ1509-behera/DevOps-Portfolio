import { motion } from "framer-motion";
import { Cloud, Server, GitBranch, Container } from "lucide-react";

export default function Skills() {
  const skills = [
    {
      icon: <Cloud size={40} />,
      title: "Cloud",
      description: "AWS"
    },
    {
      icon: <Container size={40} />,
      title: "Containers",
      description: "Docker, Kubernetes",
    },
    {
      icon: <GitBranch size={40} />,
      title: "CI/CD",
      description: "GitLab CI/CD",
    },
    {
      icon: <Server size={40} />,
      title: "Infrastructure",
      description: "Terraform, Linux, Nginx",
    },
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-slate-900">
      <h2 className="text-4xl font-bold text-center text-sky-400 mb-16">
        Technical Skills
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ scale: 1.08 }}
            className="bg-slate-800 p-8 rounded-2xl text-center shadow-lg hover:shadow-sky-400/40 transition duration-300"
          >
            <div className="text-sky-400 mb-4 flex justify-center animate-pulse">
              {skill.icon}
            </div>

            <h3 className="text-2xl font-semibold mb-3">
              {skill.title}
            </h3>

            <p className="text-gray-600 dark:text-gray-400">
              {skill.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}