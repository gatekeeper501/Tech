export default function AboutStory() {
  const stats = [
    {
      value: "15+",
      label: "Years in Technology",
    },
    {
      value: "A+",
      label: "CompTIA Certified",
    },
    {
      value: "Azure",
      label: "Cloud Certified",
    },
    {
      value: "100+",
      label: "Devices Repaired",
    },
  ];

  const expertise = [
    {
      icon: "🖥️",
      title: "IT Support",
      description:
        "Windows, macOS, Microsoft 365, troubleshooting, user assistance, and system configuration.",
    },
    {
      icon: "🔧",
      title: "Hardware Repair",
      description:
        "Device diagnostics, screen replacement, battery replacement, electronics troubleshooting, and repair workflows.",
    },
    {
      icon: "🌐",
      title: "Web Development",
      description:
        "Modern responsive websites using React, Next.js, Tailwind CSS, and cloud deployment workflows.",
    },
    {
      icon: "☁️",
      title: "Cloud & Automation",
      description:
        "Azure services, GitHub Actions, CI/CD pipelines, deployment automation, and cloud-based solutions.",
    },
  ];

  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Azure",
    "GitHub Actions",
    "Windows",
    "macOS",
    "Linux",
    "Networking",
    "Hardware Repair",
    "Troubleshooting",
    "Microsoft 365",
    "WordPress",
  ];

  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="py-16 border-b border-slate-800"
    >
      <div className="max-w-6xl mx-auto px-5">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2
            id="about-title"
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            About Me
          </h2>

          <p className="max-w-3xl mx-auto text-slate-300 leading-relaxed">
            I&apos;m Cornell Cornelius Jr., an IT professional, developer, and
            technology troubleshooter based in Arkansas. My background combines
            formal education in computer information systems and computer
            science with hands-on experience in hardware repair, IT support,
            cloud technologies, and modern web development.
          </p>

          <p className="max-w-3xl mx-auto text-slate-400 mt-4">
            Through Tech by Cornelius, I help individuals and organizations
            solve technology problems, build reliable digital solutions, and
            deploy modern web applications.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-slate-800 border border-slate-700 rounded-xl p-5 text-center"
            >
              <div className="text-2xl md:text-3xl font-bold text-sky-400">
                {stat.value}
              </div>
              <div className="text-sm text-slate-300 mt-2">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Expertise */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-6">
            Areas of Expertise
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {expertise.map((item) => (
              <div
                key={item.title}
                className="bg-slate-800 border border-slate-700 rounded-xl p-6"
              >
                <div className="text-3xl mb-3">{item.icon}</div>

                <h4 className="text-lg font-semibold text-sky-400 mb-2">
                  {item.title}
                </h4>

                <p className="text-slate-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-6">
            Certifications & Recognition
          </h3>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-slate-800 border border-slate-700 rounded-xl p-5">
              <h4 className="font-semibold text-white">CompTIA A+</h4>
              <p className="text-sm text-slate-400 mt-2">
                Earned June 2, 2010
              </p>
            </div>

            <div className="bg-slate-800 border border-slate-700 rounded-xl p-5">
              <h4 className="font-semibold text-white">
                Microsoft Certified: Azure Fundamentals
              </h4>
              <p className="text-sm text-slate-400 mt-2">
                Earned October 25, 2021
              </p>
            </div>

            <div className="bg-slate-800 border border-slate-700 rounded-xl p-5">
              <h4 className="font-semibold text-white">
                Apple Teacher Recognition
              </h4>
              <p className="text-sm text-slate-400 mt-2">
                Awarded January 12, 2026
              </p>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-6">
            Technical Skills
          </h3>

          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-300 text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-6">
            Education
          </h3>

          <div className="space-y-6 border-l-2 border-slate-700 pl-6">
            <div>
              <span className="text-sky-400 text-sm font-semibold">
                2025
              </span>
              <h4 className="text-white font-semibold mt-1">
                University of Arkansas at Little Rock
              </h4>
              <p className="text-slate-400 text-sm">
                Introduction to Statistical Methods
              </p>
            </div>

            <div>
              <span className="text-sky-400 text-sm font-semibold">
                University of Arkansas, Fayetteville
              </span>
              <h4 className="text-white font-semibold mt-1">
                Computer Science Coursework
              </h4>
              <p className="text-slate-400 text-sm">
                Software Engineering, Operating Systems, Computer Networks,
                Database Systems, Programming Paradigms, and Embedded Systems.
              </p>
            </div>

            <div>
              <span className="text-sky-400 text-sm font-semibold">
                2008 – 2011
              </span>
              <h4 className="text-white font-semibold mt-1">
                UA - Pulaski Technical College
              </h4>
              <p className="text-slate-400 text-sm">
                Associate of General Studies (2011), Associate of Applied Science in Computer Information Systems (2009), Technical Certificates & Credentials (2008–2009)
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-3">
            Let&apos;s Build Something Together
          </h3>

          <p className="text-slate-300 max-w-2xl mx-auto mb-6">
            Whether you need IT support, hardware diagnostics, website
            development, or cloud deployment assistance, I&apos;m ready to help.
          </p>

          <a
            href="/contact"
            className="inline-block bg-sky-600 hover:bg-sky-500 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}