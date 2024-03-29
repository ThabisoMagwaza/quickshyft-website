import { Inter } from 'next/font/google';
import StyledComponentsRegistry from '@/lib/registry';
import GlobalStyles from '@/components/GlobalStyles';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'QuickShyft',
  description:
    'An informal job marketplace where ordinary people can hire independent contractors to complete small jobs',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <StyledComponentsRegistry>
        <body className={inter.className}>
          <header>
            <Navigation />
          </header>
          {children}
          <Footer />
        </body>
        <GlobalStyles />
      </StyledComponentsRegistry>
    </html>
  );
}
