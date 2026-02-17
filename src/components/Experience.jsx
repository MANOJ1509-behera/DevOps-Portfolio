export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 bg-slate-900">
      <h2 className="text-4xl font-bold text-center text-sky-400 mb-12">
        Experience
      </h2>

      <div className="max-w-4xl mx-auto bg-slate-800 p-8 rounded-xl">
        <h3 className="text-2xl font-semibold">Tech Mahindra</h3>
        <p className="text-gray-400 mt-2">
          DevOps Engineer | 2+ Years
        </p>
        <ul className="mt-4 text-gray-400 list-disc list-inside">
          <li>Built CI/CD pipelines using GitLab & Jenkins</li>
          <li>Managed Kubernetes clusters</li>
          <li>Automated infrastructure using Terraform</li>
          <li>Implemented DORA metrics tracking</li>
        </ul>
      </div>
    </section>
  );
}