import type { Metadata } from "next";
import "./globals.css";
import { outfit, rockroll } from "./config/fonts";


export const metadata: Metadata = {
  title: "Portafolio",
  description: "Creado por Yoel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={rockroll.variable}>
      <body
        className={`${outfit.className} antialiased`}
      >
        {children}
        
      </body>
    </html>
  );
}
