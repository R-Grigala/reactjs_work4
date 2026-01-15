import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'რეგისტრაციის ფორმა',
  description: 'მომხმარებლის რეგისტრაციის ფორმა Next.js-ით',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ka">
      <body className={inter.className}>{children}</body>
    </html>
  );
}