import '@/styles/globals.css';
import { Providers } from './providers';
import { Host_Grotesk } from 'next/font/google';
import type { Metadata } from 'next';

const inter = Host_Grotesk({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dashboard',
  description:
    'Responsive dashboard built with Next.js 15, Tailwind CSS, ShadCN UI',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}`}>
        <Providers>
          <main className="bg-background text-foreground flex flex-col min-h-screen">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
