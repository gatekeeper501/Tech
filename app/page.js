import Gallery from '../components/Gallery';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* About Section */}
      <section className="py-10 border-b border-slate-800">
        <div className="w-full max-w-[960px] mx-auto px-5">
          <h2 className="text-2xl font-bold text-gray-200 mb-4">
            🛠️ Comprehensive Tech Services & Solutions
          </h2>
          <p className="text-base text-gray-300 leading-relaxed mb-4">
            Based in Central Arkansas, I offer a blend of hands-on electronics hardware repair, IT systems support, and modern web application development. Whether diagnosing board-level faults or engineering cloud-connected web tools, every project is executed with precision.
          </p>
        </div>
      </section>

      {/* Gallery Showcase */}
      <Gallery />

      {/* Education & Background Section */}
      <section className="py-10 bg-slate-950/40 border-t border-slate-800">
        <div className="w-full max-w-[960px] mx-auto px-5">
          <h2 className="text-2xl font-bold text-gray-200 mb-4">
            🎓 Education & Technical Credentials
          </h2>
          <div className="bg-slate-800/80 border border-slate-700 rounded-xl p-6">
            <h3 className="text-lg font-bold text-sky-400 mb-1">
              Associate of Science in Computer Information Systems
            </h3>
            <p className="text-gray-400 text-sm mb-3">
              University of Arkansas System • Continued Studies in Computer Science (UALR)
            </p>
            <p className="text-gray-300 text-sm leading-relaxed">
              Academic coursework focused on database administration, systems analysis, object-oriented programming, and network infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Core Competencies Grid */}
      <section className="py-10 border-t border-slate-800">
        <div className="w-full max-w-[960px] mx-auto px-5">
          <h2 className="text-2xl font-bold text-gray-200 mb-6">
            ⚡ Core Competencies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-800/60 border border-slate-700/80 p-5 rounded-xl">
              <h3 className="text-lg font-bold text-sky-400 mb-2">Hardware Diagnostics</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Precision screen and battery replacement, component-level troubleshooting, adhesive bonding (B-7000), and custom electronics builds.
              </p>
            </div>
            <div className="bg-slate-800/60 border border-slate-700/80 p-5 rounded-xl">
              <h3 className="text-lg font-bold text-sky-400 mb-2">Web Engineering</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Modern responsive architectures using React, Next.js App Router, Tailwind CSS, REST APIs, and automated CI/CD deployment pipelines.
              </p>
            </div>
            <div className="bg-slate-800/60 border border-slate-700/80 p-5 rounded-xl">
              <h3 className="text-lg font-bold text-sky-400 mb-2">Systems & Networking</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Workstation configuration, remote administration, DNS routing, secure tunnel/VPN setups, and video security hardware deployment.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}