import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";

const Hero = lazy(() => import("./components/Hero"));
const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Experience = lazy(() => import("./components/Experience"));
const Projects = lazy(() => import("./components/Projects"));
const Certifications = lazy(() => import("./components/Certifications"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

export default function App() {
  return (
    <div className="bg-slate-950 text-white scroll-smooth">
      <Navbar />
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-sky-400">Loading...</div>}>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  );
}