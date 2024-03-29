import '@/styles/global.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Suspense } from 'react';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Weather App',
  description:
    'Weather App is a comprehensive and user-friendly weather application that provides accurate and up-to-date weather information for locations around the world. Stay informed about current conditions, forecasts, and more with this intuitive weather app.',
};

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout = async ({ children }: RootLayoutProps) => {
  return (
    <html lang="en" className={cn('bg-gray-950', inter.className)}>
      <body className=" bg-gray-950 text-gray-200">
        <main className="container relative mx-auto flex min-h-screen flex-col">
          <Header />
          <div className="flex grow items-center justify-center">
            <Suspense>{children}</Suspense>
          </div>
          <Footer />
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
