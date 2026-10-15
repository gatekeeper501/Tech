export default function AboutStory() {
  return (
    <section id="about" aria-labelledby="about-title" className="py-10 border-b border-slate-800">
      <div className="w-full max-w-[960px] mx-auto px-5">
        <h2 id="about-title" className="text-2xl font-bold text-gray-200 mb-4">
          📖 My Story
        </h2>

        {/* Narrative Intro Card */}
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 md:p-8 mb-8 space-y-4 text-gray-300 leading-relaxed text-base">
          <p>
            I’m Cornell Cornelius Jr., an IT professional and developer serving Central Arkansas. My path in technology brings together formal college study and hands-on work with computers, software, and web applications.
          </p>
          <p>
            At Pulaski Technical College, now UA - Pulaski Technical College, I earned an Associate of Applied Science in Computer Information Systems in 2009 and an Associate of General Studies in 2011, along with college certificates in computer information systems and general studies.
          </p>
          <p>
            My education continued with computer science coursework at the University of Arkansas, Fayetteville, including software engineering, operating systems, computer networks, database management, programming paradigms, and embedded systems. I also completed Introduction to Statistical Methods at the University of Arkansas at Little Rock in 2025.
          </p>
          <p>
            I earned CompTIA A+ certification in 2010 and Microsoft Certified: Azure Fundamentals in 2021, and received Apple Teacher recognition in 2026. Alongside my college education, these credentials reflect continued learning in IT support, cloud fundamentals, and the use of Apple technology in education.
          </p>
          <p>
            Through Tech by Cornelius, I connect that foundation with ongoing work in hardware troubleshooting, React Native and Expo development, and web deployment using Azure and GitHub Actions. My approach is to understand the problem, explain the options clearly, and build practical solutions.
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Professional Certifications */}
          <div className="bg-slate-800/80 border border-slate-700 rounded-xl p-6">
            <h3 id="certifications-title" className="text-lg font-bold text-sky-400 mb-4">
              🏅 Professional Certifications & Recognition
            </h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex flex-col">
                <span className="font-semibold text-gray-100">CompTIA A+</span>
                <span className="text-gray-400 text-xs">Earned June 2, 2010</span>
              </li>
              <li className="flex flex-col">
                <span className="font-semibold text-gray-100">Microsoft Certified: Azure Fundamentals</span>
                <span className="text-gray-400 text-xs">Earned October 25, 2021</span>
              </li>
              <li className="flex flex-col">
                <span className="font-semibold text-gray-100">Apple Teacher — Certificate of Recognition</span>
                <span className="text-gray-400 text-xs">Awarded January 12, 2026</span>
              </li>
            </ul>
          </div>

          {/* Education & College Credentials */}
          <div className="bg-slate-800/80 border border-slate-700 rounded-xl p-6">
            <h3 id="education-title" className="text-lg font-bold text-sky-400 mb-1">
              🎓 Education & College Credentials
            </h3>
            <p className="text-xs text-gray-400 mb-4">
              Awarded by UA - Pulaski Technical College (formerly Pulaski Technical College)
            </p>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex justify-between border-b border-slate-700/60 pb-1.5">
                <span>Associate of Applied Science (CIS)</span>
                <span className="text-sky-400 font-mono text-xs">2009</span>
              </li>
              <li className="flex justify-between border-b border-slate-700/60 pb-1.5">
                <span>Associate of General Studies</span>
                <span className="text-sky-400 font-mono text-xs">2011</span>
              </li>
              <li className="flex justify-between border-b border-slate-700/60 pb-1.5">
                <span>Technical Certificate (CIS)</span>
                <span className="text-sky-400 font-mono text-xs">2008</span>
              </li>
              <li className="flex justify-between border-b border-slate-700/60 pb-1.5">
                <span>Certificate of Proficiency (CIS)</span>
                <span className="text-sky-400 font-mono text-xs">2008</span>
              </li>
              <li className="flex justify-between">
                <span>Certificate of General Studies</span>
                <span className="text-sky-400 font-mono text-xs">2009</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Completed Coursework Breakdown */}
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 md:p-8">
          <h3 id="coursework-title" className="text-lg font-bold text-sky-400 mb-2">
            📚 Selected Completed Coursework
          </h3>
          <p className="text-sm text-gray-400 mb-6">
            Spanning practical IT systems, computer science, and quantitative analysis.
          </p>

          <dl className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-900/60 border border-slate-700/60 rounded-lg p-4">
              <dt className="text-sm font-bold text-sky-300 mb-1">Programming & Software</dt>
              <dd className="text-xs md:text-sm text-gray-300 leading-relaxed">
                Programming Foundations I & II, Visual Basic.NET, Programming Paradigms, and Software Engineering.
              </dd>
            </div>

            <div className="bg-slate-900/60 border border-slate-700/60 rounded-lg p-4">
              <dt className="text-sm font-bold text-sky-300 mb-1">Computer Systems</dt>
              <dd className="text-xs md:text-sm text-gray-300 leading-relaxed">
                Computer Organization, Assembly Language, Operating Systems, Desktop Operating Systems, and Embedded Systems.
              </dd>
            </div>

            <div className="bg-slate-900/60 border border-slate-700/60 rounded-lg p-4">
              <dt className="text-sm font-bold text-sky-300 mb-1">Networking & IT</dt>
              <dd className="text-xs md:text-sm text-gray-300 leading-relaxed">
                Local Area Networks, Computer Networks, and IT Essentials I & II.
              </dd>
            </div>

            <div className="bg-slate-900/60 border border-slate-700/60 rounded-lg p-4">
              <dt className="text-sm font-bold text-sky-300 mb-1">Web Technologies</dt>
              <dd className="text-xs md:text-sm text-gray-300 leading-relaxed">
                Internet Technologies, Advanced Web Page Design and Languages, and Website Administration & Security.
              </dd>
            </div>

            <div className="bg-slate-900/60 border border-slate-700/60 rounded-lg p-4">
              <dt className="text-sm font-bold text-sky-300 mb-1">Databases</dt>
              <dd className="text-xs md:text-sm text-gray-300 leading-relaxed">
                Introduction to Databases and Database Management Systems.
              </dd>
            </div>

            <div className="bg-slate-900/60 border border-slate-700/60 rounded-lg p-4">
              <dt className="text-sm font-bold text-sky-300 mb-1">Mathematics & Statistics</dt>
              <dd className="text-xs md:text-sm text-gray-300 leading-relaxed">
                Calculus I, II, and III; Discrete Mathematics; and Introduction to Statistical Methods.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}