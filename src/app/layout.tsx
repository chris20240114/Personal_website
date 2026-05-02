import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { site } from "@/content/site";
import { CommandPalette } from "@/frontend/command-palette";
import { ThemeProvider } from "@/frontend/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: `${site.name} | Software Engineer Portfolio`,
    template: `%s | ${site.name}`,
  },
  description: site.tagline,
  applicationName: `${site.name} Portfolio`,
  authors: [{ name: site.name }],
  creator: site.name,
  keywords: [
    "software engineer",
    "full-stack developer",
    "backend engineer",
    "machine learning",
    "FastAPI",
    "Next.js",
    "React",
    "PostgreSQL",
  ],
  openGraph: {
    title: `${site.name} | Software Engineer Portfolio`,
    description: site.tagline,
    type: "website",
    url: "/",
    siteName: `${site.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Software Engineer Portfolio`,
    description: site.tagline,
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${mono.variable} antialiased`}>
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <CommandPalette />
        </ThemeProvider>
      </body>
    </html>
  );
}
