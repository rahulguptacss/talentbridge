import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Topbar from '../components/sections/Topbar';
import Header from '../components/sections/Header';
import Footer from '../components/sections/Footer';
import BackToTop from '../components/ui/BackToTop';

const plusJakartaSans = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'TalentBridge - Your Hiring Partner',
  description: 'Connecting top talent with the right opportunities.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.className} antialiased`}>
        <Topbar />
        <Header />
        {children}
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
