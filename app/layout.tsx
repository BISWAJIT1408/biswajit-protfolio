import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Biswajit Biswaranjan Sahoo | Software Developer",
  description: "Portfolio of Biswajit Biswaranjan Sahoo — MCA student and aspiring software developer.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}