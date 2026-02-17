export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6">
      <h2 className="text-4xl font-bold text-center text-sky-400 mb-12">
        Technical Skills
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
        <div className="bg-slate-800 p-8 rounded-xl">
          <h3 className="text-2xl mb-4">Cloud</h3>
          <p className="text-gray-400">AWS, Azure</p>
        </div>

        <div className="bg-slate-800 p-8 rounded-xl">
          <h3 className="text-2xl mb-4">Containers</h3>
          <p className="text-gray-400">Docker, Kubernetes</p>
        </div>

        <div className="bg-slate-800 p-8 rounded-xl">
          <h3 className="text-2xl mb-4">CI/CD</h3>
          <p className="text-gray-400">GitLab, Jenkins, SonarQube</p>
        </div>
      </div>
    </section>
  );
}