import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import Head from "next/head";
import "./globals.css";

const lexend = Lexend({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CmSe7en Entertainment",
  description: "App musics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/src/assets/logo.png"></link>
      </Head>
      <body className={lexend.className}>{children}</body>
    </html>
  );
}
