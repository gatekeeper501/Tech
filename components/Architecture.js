export default function Architecture() {
  return (
    <section className="py-10">
      <div className="w-full max-w-[960px] mx-auto px-5">
        <h2 className="text-2xl font-bold text-gray-200 mb-2">
          🏗️ Project Architecture & Engineering Skills
        </h2>
        <p className="text-base text-gray-300 leading-relaxed mb-6">
          Building this cloud-based portfolio and dynamic intake system demonstrated the following full-stack competencies:
        </p>

        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 md:p-8 shadow-lg space-y-6">
          {/* Front-End */}
          <div>
            <h3 className="text-lg font-bold text-sky-400 mb-2">
              Front-End UI & State Management
            </h3>
            <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm md:text-base leading-relaxed">
              <li>
                Engineered a responsive, accessible interface using Next.js App Router, React Server Components, and Tailwind CSS.
              </li>
              <li>
                Managed client-side interactive state for multi-step form routing, quick-select chips, and dynamic modal overlays.
              </li>
            </ul>
          </div>

          <div className="border-t border-slate-700/80 pt-6">
            {/* Back-End */}
            <h3 className="text-lg font-bold text-sky-400 mb-2">
              Back-End Integration & Serverless API
            </h3>
            <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm md:text-base leading-relaxed">
              <li>
                Engineered serverless REST webhooks via Google Apps Script to securely parse incoming JSON POST payloads.
              </li>
              <li>
                Automated asynchronous data pipelines routing intake submissions directly into live database sheets.
              </li>
            </ul>
          </div>

          <div className="border-t border-slate-700/80 pt-6">
            {/* Cloud & DevOps */}
            <h3 className="text-lg font-bold text-sky-400 mb-2">
              Cloud DevOps & IT Infrastructure
            </h3>
            <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm md:text-base leading-relaxed">
              <li>
                Configured Microsoft Azure Static Web Apps deployment workflows using GitHub Actions CI/CD pipelines.
              </li>
              <li>
                Provisioned custom DNS records, automated SSL certificate bindings, and static site export pipelines.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}