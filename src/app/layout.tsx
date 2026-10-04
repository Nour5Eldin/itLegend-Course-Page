import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "ITLegend Courses | Learn, Practice & Build",
  description:
    "Explore ITLegend courses, follow structured lessons, and build your skills through a focused learning experience.",
  openGraph: {
    title: "ITLegend Courses | Learn, Practice & Build",
    description:
      "Explore ITLegend courses, follow structured lessons, and build your skills through a focused learning experience.",
    images: [
      {
        url: "https://itlegend.net/assets/images/og-img.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={inter.className}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>{children}</body>
    </html>
  );
}
