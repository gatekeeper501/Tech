import Gallery from '../components/Gallery';
import AboutStory from '../components/AboutStory';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* 1. ENTERPRISE VS FIELD IT SPLIT (The "Dual Impact" Section) */}
      <section className="py-12 border-b border-slate-800 bg-slate-900/50">
        <div className="w-full max-w-[960px] mx-auto px-5">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-100 tracking-tight mb-3">
              Technical Capabilities &amp; Services
            </h2>
            <p className="text-sm text-gray-400 max-w-2xl mx-auto">
              Bridging the gap between high-level cloud software engineering and ground-level physical infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* COLUMN A: Software Engineering (For Hiring Managers) */}
            <div className="bg-slate-800/80 border border-sky-900/50 rounded-xl p-8 hover:border-sky-700 transition-colors shadow-[0_0_15px_rgba(14,165,233,0.05)]">
              <div className="w-12 h-12 bg-sky-900/50 text-sky-400 rounded-lg flex items-center justify-center text-2xl mb-6 border border-sky-700/50">
                ☁️
              </div>
              <h3 className="text-xl font-bold text-gray-100 mb-3">
                Enterprise Software &amp; Cloud Systems
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed mb-6">
                Modern full-stack web applications, serverless API integration, and automated CI/CD pipelines deployed on Microsoft Azure. Engineered for performance, SEO, and scalability.
              </p>
              <ul className="space-y-2 text-sm text-gray-400 font-mono mb-8">
                <li className="flex items-center gap-2"><span className="text-sky-500">›</span> React &amp; Next.js App Router</li>
                <li className="flex items-center gap-2"><span className="text-sky-500">›</span> Azure Static Web Apps</li>
                <li className="flex items-center gap-2"><span className="text-sky-500">›</span> GitHub Actions CI/CD</li>
                <li className="flex items-center gap-2"><span className="text-sky-500">›</span> Relational Database &amp; API Design</li>
              </ul>
              <Link href="/architecture" className="text-sky-400 text-sm font-semibold hover:text-sky-300 flex items-center gap-1">
                View Architecture Case Studies &rarr;
              </Link>
            </div>

            {/* COLUMN B: Field IT (For Local Clients) */}
            <div className="bg-slate-800/80 border border-slate-700 rounded-xl p-8 hover:border-slate-600 transition-colors">
              <div className="w-12 h-12 bg-slate-900 text-gray-300 rounded-lg flex items-center justify-center text-2xl mb-6 border border-slate-700">
                🔧
              </div>
              <h3 className="text-xl font-bold text-gray-100 mb-3">
                Field IT &amp; Hardware Operations
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed mb-6">
                Hands-on component-level diagnostics, physical network routing, AV infrastructure, and Tier-1 end-user support. Bridging hardware failures with actionable resolutions.
              </p>
              <ul className="space-y-2 text-sm text-gray-400 font-mono mb-8">
                <li className="flex items-center gap-2"><span className="text-gray-500">›</span> Microelectronics &amp; Display Repair</li>
                <li className="flex items-center gap-2"><span className="text-gray-500">›</span> Network &amp; DVR Cabling</li>
                <li className="flex items-center gap-2"><span className="text-gray-500">›</span> Help Desk &amp; OS Troubleshooting</li>
                <li className="flex items-center gap-2"><span className="text-gray-500">›</span> Embedded Automotive Systems</li>
              </ul>
              <Link href="/repair" className="text-gray-300 text-sm font-semibold hover:text-white flex items-center gap-1">
                View Support Methodology &rarr;
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* 2. My Story & Credentials */}
      <AboutStory />

      {/* 3. Workbench Showcase (Visual Proof of Hardware Work) */}
      <section className="py-12 border-t border-slate-800">
        <div className="w-full max-w-[960px] mx-auto px-5 mb-6">
          <h2 className="text-2xl font-bold text-gray-100">
            📸 Hardware Diagnostics Showcase
          </h2>
          <p className="text-sm text-gray-400 mt-2">
            Field documentation of active logic board evaluations and display repairs.
          </p>
        </div>
        <Gallery />
      </section>

    </div>
  );
}