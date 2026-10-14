import './globals.css';
import NavBar from '../components/NavBar';
import Header from '../components/Header';

export const metadata = {
  title: 'Tech by Cornelius | IT Professional & Developer',
  description: 'Cornell Cornelius Jr. is a comprehensive technology specialist serving Central Arkansas.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-900 text-gray-200 min-h-screen flex flex-col">
        <NavBar />
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <footer className="py-8 border-t border-slate-700 text-center text-sm text-gray-400">
          © 2026 Cornell Cornelius Jr. — Benton, Arkansas.
        </footer>
      </body>
    </html>
  );
}