import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "ITLegend | Starting SEO as your Home",
  description: "Course details page for Starting SEO as your Home — learn SEO fundamentals with ITLegend's structured curriculum.",
  openGraph: {
    title: "Starting SEO as your Home",
    description: "Learn SEO fundamentals with ITLegend's structured curriculum.",
    images: [{ url: "https://itlegend.net/assets/images/og-img.png" }],
  }
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
