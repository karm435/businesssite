import '@/styles/globals.css';
import { Inter, Lexend } from 'next/font/google';
import { Metadata } from 'next';
import appsData from '@/data/apps.json';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
});

export const metadata: Metadata = {
  title: `${appsData.company.name} - iOS App Developer`,
  description: appsData.company.description,
  openGraph: {
    title: `${appsData.company.name} - iOS App Developer`,
    description: appsData.company.description,
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${lexend.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
} 