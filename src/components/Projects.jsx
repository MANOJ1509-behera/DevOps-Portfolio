import { motion } from "framer-motion";
import { Gitlab } from "lucide-react";

export default function Projects() {

  const projects = [
    {
      title: "Job Portal CI/CD Pipeline with Kubernetes & Monitoring",
      description:
        "Engineered a comprehensive CI/CD pipeline for a job portal application, automating Docker container builds, Kubernetes deployments via Helm charts, and integrating Prometheus & Grafana for real-time monitoring, metrics visualization, and system observability to ensure high availability and performance.",
      tech: "Kubernetes • Docker • Helm • Prometheus • Grafana • GitLab CI/CD",
      gitlab: "https://gitlab.com/devops-practice6391147/job_portal_website",
    },
    {
      title: "DevSecOps Pipeline for Juice Shop with Comprehensive Security Scans",
      description:
        "Developed a DevSecOps CI/CD pipeline for Juice Shop, integrating SAST, DAST, SCA, SonarQube scans, and container security scanning to detect and mitigate vulnerabilities throughout the development lifecycle.",
      tech: "GitLab CI/CD • SAST • DAST • SCA • SonarQube • Container Scanning",
      gitlab: "https://gitlab.com/devsecops2551408/juice-shop/-/blob/main/.gitlab-ci.yml?ref_type=heads",
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

              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {project.description}
              </p>

              <p className="text-sm text-sky-400 mb-6">
                {project.tech}
              </p>

              <div className="flex gap-6">

                <a
                  href={project.gitlab}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-sky-400 transition"
                >
                  <Gitlab size={18} />
                  GitLab
                </a>

              </div>

            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
}