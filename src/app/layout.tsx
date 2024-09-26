import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Medical Agents',
  description: 'An application to interact with AI medical agents',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
