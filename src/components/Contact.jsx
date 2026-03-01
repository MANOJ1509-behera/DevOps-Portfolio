import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Gitlab } from "lucide-react";

export default function Contact() {
  const contacts = [
    {
      icon: <Mail size={24} />,
      title: "Email",
      label: "Send Email",
      link: "mailto:manojbehera1509@gmail.com",
    },
    {
      icon: <Linkedin size={24} />,
      title: "LinkedIn",
      label: "View Profile",
      link: "https://www.linkedin.com/in/manoj-kumar-behera-62b3772ab/",
    },
    {
      icon: <Github size={24} />,
      title: "GitHub",
      label: "View Profile",
      link: "https://github.com/MANOJ1509-behera",
    },
    {
      icon: <Gitlab size={24} />,
      title: "GitLab",
      label: "View Profile",
      link: "https://gitlab.com/manojbehera1509",
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-28 px-6 bg-slate-950 overflow-hidden"
    >
      <div className="absolute -top-20 left-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative max-w-4xl mx-auto p-14 rounded-3xl 
                   bg-slate-900/60 backdrop-blur-xl 
                   border border-slate-700 
                   shadow-[0_0_40px_rgba(56,189,248,0.08)] text-center"
      >
        <h2 className="text-5xl font-bold text-sky-400 mb-8 tracking-wide">
          Contact Me
        </h2>

        <p className="text-gray-300 mb-14 text-lg">
          I'm open to DevOps, Cloud & Platform Engineering opportunities.
          Let’s connect and build something impactful.
        </p>

        <div className="grid md:grid-cols-4 gap-10">
          {contacts.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="relative group p-8 rounded-2xl 
                         bg-slate-800/70 backdrop-blur-lg 
                         border border-slate-700 
                         shadow-lg transition duration-300"
            >
              <div className="absolute inset-0 rounded-2xl border border-transparent 
                              bg-gradient-to-r from-sky-400/0 via-sky-400/30 to-sky-400/0 
                              opacity-0 group-hover:opacity-100 transition duration-500 blur-sm"></div>

              <div className="relative z-10 flex flex-col items-center gap-4">
                <div className="text-sky-400">{item.icon}</div>

                <h3 className="text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-sm">
                  {item.label}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}