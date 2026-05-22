import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Akbar Husaini Nurraman | Software Engineer & Creative Problem Solver",
  description: "Portofolio Profesional Akbar Husaini Nurraman - Web Developer & UI/UX Designer terampil dengan spesialisasi React, Next.js, Node.js, dan PHP.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className="h-full antialiased light"
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        {children}
      </body>
    </html>
  );
}


