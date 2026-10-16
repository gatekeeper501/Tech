export default function SupportMethodology() {
  return (
    <section className="py-12 border-t border-slate-800 bg-slate-900">
      <div className="w-full max-w-[960px] mx-auto px-5">
        
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-100 tracking-tight mb-8">
          🖥️ Support Philosophy &amp; Troubleshooting Methodology
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Ticketing & Support Framework */}
          <div>
            <h3 className="text-lg font-bold text-sky-400 mb-4 border-b border-slate-700 pb-2">
              Tier-1 Incident Response
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed mb-4">
              Effective IT support requires bridging the gap between technical infrastructure and end-user frustration. Drawing from extensive high-volume customer service and POS retail experience, I approach troubleshooting through a strict four-step framework:
            </p>
            <ul className="space-y-4 text-sm text-gray-200">
              <li className="flex gap-3 items-start">
                <span className="flex items-center justify-center w-6 h-6 rounded bg-sky-900 text-sky-300 font-mono font-bold text-xs shrink-0">1</span>
                <div>
                  <strong className="text-gray-100 block">Intake &amp; De-escalation</strong>
                  <span className="text-gray-400">Actively listen to the user, translate their symptoms into technical parameters without using alienating jargon, and manage expectations.</span>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <span className="flex items-center justify-center w-6 h-6 rounded bg-sky-900 text-sky-300 font-mono font-bold text-xs shrink-0">2</span>
                <div>
                  <strong className="text-gray-100 block">Layer 1 Isolation</strong>
                  <span className="text-gray-400">Verify physical connections, power states, and basic configurations before escalating to complex network or registry faults.</span>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <span className="flex items-center justify-center w-6 h-6 rounded bg-sky-900 text-sky-300 font-mono font-bold text-xs shrink-0">3</span>
                <div>
                  <strong className="text-gray-100 block">Execution &amp; Testing</strong>
                  <span className="text-gray-400">Apply the fix and verify directly with the user that the primary workflow is restored.</span>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <span className="flex items-center justify-center w-6 h-6 rounded bg-sky-900 text-sky-300 font-mono font-bold text-xs shrink-0">4</span>
                <div>
                  <strong className="text-gray-100 block">Documentation</strong>
                  <span className="text-gray-400">Log the root cause and resolution steps to establish a knowledge base for future incidents.</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Hardware Case Study */}
          <div className="bg-slate-800/80 border border-slate-700 rounded-xl p-6">
            <h3 className="text-lg font-bold text-sky-400 mb-4">
              Case Study: Field Infrastructure &amp; A/V Routing
            </h3>
            <div className="space-y-4 text-sm text-gray-300 leading-relaxed">
              <p>
                <strong className="text-gray-100 block">The Problem:</strong>
                A client required a centralized DVR security system to route high-definition video feeds to remote displays across the building. Standard HDMI cables suffered from severe signal degradation and distance attenuation.
              </p>
              <p>
                <strong className="text-gray-100 block">The Troubleshooting Process:</strong>
                I tested the signal drop-off and evaluated active vs. passive extension solutions. I opted to implement J-Tech Digital HDMI-over-Ethernet balun transceivers. I pulled and terminated Cat5e/Cat6 twisted-pair cabling with T568B RJ45 ends, allowing the active TMDS signal to run cleanly over the network lines.
              </p>
              <p>
                <strong className="text-gray-100 block">The Resolution:</strong>
                The conversion successfully bypassed the distance limitations of standard HDMI. I then configured the DVR network settings to allow secure, remote IP access, delivering a latency-free, localized 1080p video routing system.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}