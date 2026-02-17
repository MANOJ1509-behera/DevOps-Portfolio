export default function Navbar() {
  return (
    <nav className="fixed w-full bg-slate-900 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between">
        <h1 className="text-xl font-bold text-sky-400">Manoj Kumar Behera</h1>
        <div className="space-x-6 hidden md:flex">
          <a href="#about" className="hover:text-sky-400">About</a>
          <a href="#skills" className="hover:text-sky-400">Skills</a>
          <a href="#experience" className="hover:text-sky-400">Experience</a>
          <a href="#projects" className="hover:text-sky-400">Projects</a>
          <a href="#contact" className="hover:text-sky-400">Contact</a>
        </div>
      </div>
    </nav>
  );
}