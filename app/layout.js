import './globals.css';
import NavBar from '../components/NavBar';
import Header from '../components/Header';

export const metadata = {
  metadataBase: new URL('https://www.techbycornelius.com'),
  title: {
    default: 'Tech by Cornelius | IT Professional & Developer | Central Arkansas',
    template: '%s | Tech by Cornelius',
  },
  description:
    'Cornell Cornelius Jr. provides expert IT support, electronics hardware repair, and cloud web development across Central Arkansas. Certified CompTIA A+, Microsoft Azure Fundamentals, and Apple Teacher.',
  keywords: [
    'Tech by Cornelius',
    'Cornell Cornelius Jr',
    'IT Professional Arkansas',
    'Electronics Repair Benton AR',
    'Hardware Diagnostics Little Rock',
    'Next.js Developer Arkansas',
    'CompTIA A+ Certified Technician',
  ],
  authors: [{ name: 'Cornell Cornelius Jr.' }],
  creator: 'Cornell Cornelius Jr.',
  alternates: {
    canonical: 'https://www.techbycornelius.com',
  },
  openGraph: {
    title: 'Tech by Cornelius | IT Professional & Developer',
    description:
      'Bridging the gap between hardware diagnostics and cloud-based software development in Central Arkansas.',
    url: 'https://www.techbycornelius.com',
    siteName: 'Tech by Cornelius',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }) {
  // Structured Schema data so Google understands your entity profile and location
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Tech by Cornelius',
    image: 'https://www.techbycornelius.com/assets/IMG_5717.jpg',
    url: 'https://www.techbycornelius.com',
    telephone: '',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Benton',
      addressRegion: 'AR',
      addressCountry: 'US',
    },
    founder: {
      '@type': 'Person',
      name: 'Cornell Cornelius Jr.',
      jobTitle: 'IT Specialist & Full-Stack Developer',
      alumniOf: [
        'UA - Pulaski Technical College',
        'University of Arkansas, Fayetteville',
        'University of Arkansas at Little Rock',
      ],
      hasCredential: [
        'CompTIA A+',
        'Microsoft Certified: Azure Fundamentals',
        'Apple Teacher',
      ],
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-slate-900 text-gray-200 min-h-screen flex flex-col">
        <NavBar />
        <Header />
        <main className="flex-1">{children}</main>
        <footer className="py-8 border-t border-slate-700 text-center text-sm text-gray-400">
          © 2026 Cornell Cornelius Jr. — Benton, Arkansas.
        </footer>
      </body>
    </html>
  );
} 