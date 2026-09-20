import type { Metadata } from "next";
import "./globals.css";
import "./css/index.css";

export const metadata: Metadata = {
  title: "TechToJob | Talento tech que se demuestra",
  description:
    "TechToJob es la comunidad donde el talento tech compite, se publica a sí mismo y encuentra empresas que contratan.",

  icons: {
    icon: "/images/favicon.png",
    shortcut: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
