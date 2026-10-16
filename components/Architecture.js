export default function Architecture() {
  const domains = [
    {
      category: "Low-Voltage Infrastructure & Signal Routing",
      badge: "AV & Physical Networks",
      skills: [
        "HDMI-over-Cat5/Cat6 Balun Extenders (Active TMDS signal conversion)",
        "Closed-Circuit Television (CCTV) & DVR/NVR multichannel security systems",
        "Structured Ethernet termination (T568A/T568B RJ45, patch panels, keystones)",
        "Residential AC line voltage installations (GFCI, standard receptacles, breakers)",
      ],
      description:
        "Engineered reliable residential and commercial physical layer installations. Implemented active balun transceivers to transmit uncompressed high-definition HDMI video signals across long-run Cat5e/Cat6 twisted-pair cabling, overcoming standard HDMI distance attenuation. Deployed and routed centralized multi-channel DVR security camera arrays with localized power distribution.",
    },
    {
      category: "Microelectronics Diagnostics & Hardware Repair",
      badge: "Device Engineering",
      skills: [
        "Mobile & Tablet Display Restoration (Digitizers, OLED/LCD panels, B-7000 adhesive bonding)",
        "Laptop & Desktop Diagnostics (Logic board fault isolation, RAM/SSD bus integrity)",
        "Power Management Troubleshooting (DC-in jacks, lithium-ion battery safety circuits, charging ICs)",
        "Precision chassis assembly, ESD mitigation, and thermal paste re-application",
      ],
      description:
        "Delivered component-level restorations on over 100 client devices including iPhones, iPads, MacBooks, and custom PC towers. Diagnostic workflows focus on isolating physical shorts, testing voltage rail tolerances, precision liquid adhesive curing, and restoring structural frame integrity without damaging internal flex cables or micro-soldered connectors.",
    },
    {
      category: "Automotive Embedded Systems & Controller Networks",
      badge: "Embedded & Telemetry",
      skills: [
        "Controller Area Network (CAN Bus) architecture & differential signaling",
        "On-Board Diagnostics (OBD-II) PID data logging and DTC fault isolation",
        "Electronic Control Unit (ECU) sensor arrays (MAF, O2, TPS, Crank/Cam position)",
        "12V automotive charging systems, starter motor relays, and parasitic draw isolation",
      ],
      description:
        "Leveraged automotive systems experience to diagnose complex vehicle computing networks. Analyzed sensor inputs and actuator feedback loops communicating across vehicle CAN bus networks. Evaluated real-time engine telemetry, powertrain freeze-frame data, and electrical ground offsets to pinpoint failing micro-controllers and harness degradation.",
    },
    {
      category: "Cloud Architecture & Full-Stack Web Systems",
      badge: "Cloud DevOps",
      skills: [
        "Next.js App Router (Turbopack, Static Exports, React Server Components)",
        "Microsoft Azure Static Web Apps (Edge routing, custom domain SSL binding)",
        "Automated CI/CD Pipelines (GitHub Actions workflow automation, build hooks)",
        "Serverless REST Endpoints (Payload verification, automated sheets integration)",
      ],
      description:
        "Architected and deployed techbycornelius.com as a zero-cold-start static export. Designed automated deployment pipelines via GitHub Actions that compile and push pre-rendered HTML/CSS directly to Azure edge servers on every Git commit, eliminating runtime compute costs while maximizing search engine indexing speeds.",
    },
  ];

  return (
    <section className="py-12 border-b border-slate-800">
      <div className="w-full max-w-[960px] mx-auto px-5">
        
        {/* Section Header */}
        <div className="border-b border-slate-700/80 pb-4 mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-100 tracking-tight">
            🏗️ Technical Architecture &amp; Applied Engineering
          </h2>
          <p className="text-sm text-gray-400 mt-2 max-w-3xl leading-relaxed">
            A comprehensive breakdown of field-tested engineering competencies across low-voltage signal distribution, micro-hardware repair, automotive embedded computing, and cloud systems.
          </p>
        </div>

        {/* --- NEW: Cloud Architecture Diagram & Case Study --- */}
        <div className="mb-14 bg-slate-900/50 border border-slate-700 rounded-xl p-6 md:p-8">
          <h3 className="text-xl font-bold text-sky-400 mb-6">Case Study: Cloud Hosting &amp; CI/CD Automation</h3>
          
          {/* Visual Diagram */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-center mb-8 bg-slate-950/50 p-6 rounded-lg border border-slate-800">
            <div className="w-full md:w-1/4">
              <div className="text-3xl mb-2">💻</div>
              <div className="font-bold text-gray-200 text-sm">Next.js Source</div>
              <div className="text-xs text-gray-500">React App Router</div>
            </div>
            <div className="text-sky-500 font-bold hidden md:block">→</div>
            <div className="text-sky-500 font-bold md:hidden">↓</div>
            
            <div className="w-full md:w-1/4">
              <div className="text-3xl mb-2">🐙</div>
              <div className="font-bold text-gray-200 text-sm">GitHub Repo</div>
              <div className="text-xs text-gray-500">Version Control</div>
            </div>
            <div className="text-sky-500 font-bold hidden md:block">→</div>
            <div className="text-sky-500 font-bold md:hidden">↓</div>

            <div className="w-full md:w-1/4">
              <div className="text-3xl mb-2">⚙️</div>
              <div className="font-bold text-gray-200 text-sm">GitHub Actions</div>
              <div className="text-xs text-gray-500">CI/CD Pipeline</div>
            </div>
            <div className="text-sky-500 font-bold hidden md:block">→</div>
            <div className="text-sky-500 font-bold md:hidden">↓</div>

            <div className="w-full md:w-1/4 bg-slate-800 border-sky-500 border p-3 rounded-lg shadow-[0_0_15px_rgba(14,165,233,0.2)]">
              <div className="text-3xl mb-2">☁️</div>
              <div className="font-bold text-sky-300 text-sm">Azure Static Apps</div>
              <div className="text-xs text-gray-400">Edge Network</div>
            </div>
          </div>

          {/* Case Study Writeup */}
          <div className="space-y-4 text-sm text-gray-300 leading-relaxed">
            <p>
              <strong className="text-gray-100">Objective:</strong> Architect a high-performance, secure web environment with zero manual deployment overhead and maximum search engine visibility.
            </p>
            <p>
              <strong className="text-gray-100">Execution:</strong> I migrated the core application from an Expo React Native shell to a standard Next.js static export. To automate operations, I configured a GitHub Actions YAML workflow. Upon every code push, the pipeline provisions an Ubuntu runner, installs dependencies, compiles the React Server Components into static HTML, and securely authenticates with Microsoft Azure using a deployment token. Azure Static Web Apps then distributes the pre-rendered artifacts across its global edge network.
            </p>
            <p>
              <strong className="text-gray-100">Outcome:</strong> A 100% automated CI/CD pipeline that eliminates server cold starts, neutralizes backend vulnerability vectors, and scores highly on Core Web Vitals for local SEO targeting.
            </p>
          </div>
        </div>
        {/* --- END NEW --- */}

        {/* Engineering Pillars Grid */}
        <div className="space-y-8">
          {domains.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-800/80 border border-slate-700 rounded-xl p-6 md:p-8 shadow-sm"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-700/60 pb-3 mb-4">
                <h3 className="text-lg md:text-xl font-bold text-sky-400">
                  {item.category}
                </h3>
                <span className="font-mono text-xs uppercase px-2.5 py-1 rounded bg-slate-900 border border-slate-700 text-sky-300 w-fit">
                  {item.badge}
                </span>
              </div>

              <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-6">
                {item.description}
              </p>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">
                  Applied Tools &amp; Methodologies
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                  {item.skills.map((skill, sIdx) => (
                    <li
                      key={sIdx}
                      className="text-xs md:text-sm text-gray-200 bg-slate-900/60 border border-slate-700/50 rounded-lg p-2.5 flex items-start gap-2"
                    >
                      <span className="text-sky-400 font-bold">›</span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}