import './globals.css';
import NavBar from '../components/NavBar';
import Header from '../components/Header';

export const metadata = {
  metadataBase: new URL('https://www.techbycornelius.com'),
  title: {
    default: 'Cornell Cornelius Jr. | IT Support, Web Development & Computer Repair Central Arkansas',
    template: '%s | Tech by Cornelius',
  },
  description:
    'Cornell Cornelius Jr. provides professional IT support, electronics and computer repair, and modern web development across Central Arkansas, Little Rock, and Benton. CompTIA A+, Microsoft Azure Fundamentals, Apple Teacher.',
  keywords: [
    'Cornell Cornelius',
    'Cornell Cornelius Jr',
    'Tech by Cornelius',
    'IT Support Arkansas',
    'Computer Repair Little Rock',
    'Electronics Repair Benton AR',
    'Hardware Diagnostics Little Rock',
    'Microsoft 365 Support Arkansas',
    'Next.js Developer Arkansas',
    'CompTIA A+ Certified Technician',
  ],
  authors: [{ name: 'Cornell Cornelius Jr.' }],
  creator: 'Cornell Cornelius Jr.',
  alternates: {
    canonical: 'https://www.techbycornelius.com',
  },
  openGraph: {
    title: 'Cornell Cornelius Jr. | Tech by Cornelius',
    description:
      'Professional IT support, hardware diagnostics, and cloud software development across Central Arkansas.',
    url: 'https://www.techbycornelius.com',
    siteName: 'Tech by Cornelius',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Tech by Cornelius',
    alternateName: 'Cornell Cornelius Jr. IT Services',
    image: 'https://www.techbycornelius.com/assets/IMG_5717.jpg',
    url: 'https://www.techbycornelius.com',
    telephone: '',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Benton',
      addressRegion: 'AR',
      addressCountry: 'US',
    },
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Central Arkansas' },
      { '@type': 'City', name: 'Little Rock' },
      { '@type': 'City', name: 'North Little Rock' },
      { '@type': 'City', name: 'Benton' },
      { '@type': 'City', name: 'Bryant' },
    ],
    founder: {
      '@type': 'Person',
      name: 'Cornell Cornelius Jr.',
      jobTitle: 'IT Specialist & Web Developer',
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
          © 2026 Cornell Cornelius Jr. — Tech by Cornelius. Serving Central Arkansas.
        </footer>
      </body>
    </html>
  );
}