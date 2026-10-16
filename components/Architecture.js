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

        {/* Applied Engineering Verification Bar */}
        <div className="mt-10 p-5 rounded-xl bg-slate-900/80 border border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <p className="text-sm font-semibold text-gray-200">
              Need custom physical infrastructure or device diagnostics?
            </p>
            <p className="text-xs text-gray-400 mt-0.5">
              Available for IT field services, low-voltage wiring, and component repairs in Central Arkansas.
            </p>
          </div>
          <a
            href="/contact"
            className="shrink-0 px-4 py-2 bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold rounded-lg transition-colors"
          >
            Schedule Consultation
          </a>
        </div>

      </div>
    </section>
  );
}