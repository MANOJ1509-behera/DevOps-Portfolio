export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <h2 className="text-4xl font-bold text-center text-sky-400 mb-12">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <div className="bg-slate-800 p-8 rounded-xl">
          <h3 className="text-2xl font-semibold">CI/CD Automation</h3>
          <p className="text-gray-400 mt-4">
            Automated deployments using Docker & Kubernetes.
            Reduced release cycle by 40%.
          </p>
        </div>

        <div className="bg-slate-800 p-8 rounded-xl">
          <h3 className="text-2xl font-semibold">DORA Metrics System</h3>
          <p className="text-gray-400 mt-4">
            Built monitoring system to track deployment frequency & MTTR.
          </p>
        </div>
      </div>
    </section>
  );
}