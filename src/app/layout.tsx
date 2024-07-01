import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from 'next/link';
import Image from 'next/image';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Animal Reference",
  description: "Statistics about farmed animals",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100 text-white`}>
        <div className="max-w-layout mx-auto bg-white shadow-lg">
          <header>
            <div className="bg-gray-500 text-sm">
              <div className="px-4 h-top-header flex items-center">
                <nav>
                  <ul className="flex space-x-4">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="bg-white">
              <div className="pl-logo-left pr-4 py-logo-y flex justify-between items-center">
                <Link href="/" className="flex items-center logo-container">
                  <Image
                    src="/ar-logo.svg"
                    alt="Animal Reference Logo"
                    width={278}
                    height={55}
                    priority
                  />
                </Link>
                <div className="w-64">
                  <input type="text" placeholder="Search animals, stats..." className="w-full p-2 border border-gray-300 rounded" />
                </div>
              </div>
            </div>
            <div className="bg-gray-200 text-black">
              <nav>
                <ul className="flex space-x-6 px-4 h-nav-bar items-center">
                  <li><Link href="/animals">Animals</Link></li>
                  <li><Link href="/categories">Categories</Link></li>
                  <li><Link href="/statistics">Statistics</Link></li>
                  <li><Link href="/reports">Reports</Link></li>
                  <li><Link href="/compare">Compare</Link></li>
                </ul>
              </nav>
            </div>
          </header>
          <main className="px-4 py-8">
            {children}
          </main>
          <footer className="bg-gray-200 text-black py-4">
            <div className="px-4 text-center">
              © 2024 Animal Reference
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
