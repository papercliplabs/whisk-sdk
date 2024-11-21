import type { Metadata } from "next";
import localFont from "next/font/local";
import Providers from "@/providers";

import "@paperclip-labs/dapp-kit/styles.css";
import "@rainbow-me/rainbowkit/styles.css";
import "./globals.css";

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
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const initialWagmiState = cookieToInitialState(getConfig(), headers().get("cookie"));

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers initialWagmiState={undefined}>{children}</Providers>
      </body>
    </html>
  );
}
