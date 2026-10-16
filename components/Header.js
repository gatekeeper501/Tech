export default function Header() {
  return (
    <header className="pt-16 pb-10 border-b border-slate-700 text-center shrink-0">
      <div className="w-full max-w-[960px] mx-auto px-5">
        <h1 className="text-4xl font-bold text-gray-200 mb-2">
          Cornell Cornelius Jr.
        </h1>
        <p className="text-xl text-sky-400 mb-2">
          IT Support | Computer Repair | Web Development
        </p>
        <p className="text-base text-gray-400 mb-6 max-w-2xl mx-auto">
          Delivering diagnostics, hardware repair, and cloud web development throughout Central Arkansas, including Little Rock, Benton, and surrounding communities.
        </p>
      </div>
    </header>
  );
}