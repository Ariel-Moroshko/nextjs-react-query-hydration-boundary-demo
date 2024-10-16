import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import Providers from "./Providers";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "React Query in server components demo",
  description: "React Query in server components demo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <nav className="flex flex-col items-center md:flex-row justify-center gap-16 bg-gray-900 py-8">
          <Link href="/account">Account (useQuery + initialData)</Link>
          <Link href="/account2">Account (useQuery + HydrationBoundary)</Link>
          <Link href="/receive-money">Receive Money</Link>
        </nav>
        <main className="grid place-content-center p-16">
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  );
}
