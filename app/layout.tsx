import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Personal Portfolio of Sanjog Gururaj",
  description: "Website created using nextjs, tailwind, daisyUI. Personal Portfolio, property of Sanjog Gururaj contact @ sanjog.gururaj2@gmail.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="forest">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
