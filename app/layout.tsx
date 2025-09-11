import type { Metadata } from "next";
import { Inter, Poppins, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kernel International Limited | Multi-disciplinary Research, Training & Consulting",
  description: "KIL is a multi-disciplinary research, training and consulting service provider organization based in Dhaka, Bangladesh. Specializing in consultancy, R&D, training management, design & architecture, and IT solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} ${jetbrainsMono.variable} font-poppins antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
