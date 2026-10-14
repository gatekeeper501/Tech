'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavBar() {
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Request Repair', href: '/repair' },
    { name: 'Ask a Question', href: '/contact' },
    { name: 'Engineering Skills', href: '/architecture' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-slate-800/95 backdrop-blur border-b border-slate-700">
      <div className="max-w-[960px] mx-auto flex items-center justify-start md:justify-center overflow-x-auto py-3 px-4 gap-2 no-scrollbar">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors whitespace-nowrap ${
                isActive
                  ? 'bg-sky-400 text-slate-950 shadow-sm'
                  : 'text-gray-400 hover:text-gray-100 hover:bg-slate-700/50'
              }`}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}