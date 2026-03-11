import { motion } from "framer-motion";
import { Award, ShieldCheck } from "lucide-react";

export default function Certifications() {

  const certifications = [
    {
      icon: <ShieldCheck size={40} />,
      title: "Azure Certified",
      description: "Associate Level",
    },
    {
      icon: <Award size={40} />,
      title: "AI White Belt Certification",
      description: "Introduction to Artificial Intelligence",
    },
  ];

  return (
    <section className="py-24 px-6 bg-slate-950">
      <h2 className="text-4xl font-bold text-center text-sky-400 mb-16">
        Certifications
      </h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">

        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.07 }}
            className="relative bg-slate-800 p-10 rounded-2xl text-center shadow-xl hover:shadow-sky-400/40 transition duration-300"
          >

            {/* Glowing Background Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-sky-400/10 to-blue-500/10 rounded-2xl blur-xl opacity-0 hover:opacity-100 transition duration-500"></div>

            <div className="relative z-10">
              <div className="text-sky-400 mb-6 flex justify-center animate-bounce">
                {cert.icon}
              </div>

              <h3 className="text-2xl font-semibold mb-4">
                {cert.title}
              </h3>

              <p className="text-gray-400">
                {cert.description}
              </p>
            </div>

          </motion.div>
        ))}

      </div>
    </section>
  );
}