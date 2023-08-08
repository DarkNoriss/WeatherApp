import '@/styles/global.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import type { FC } from 'react';

import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Boilerplate',
  description: 'NEXTjs Boilerplate',
};

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en" className={cn('bg-gray-950', inter.className)}>
      <body className="bg-gray-950 text-gray-200">
        <main className="container mx-auto flex">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
