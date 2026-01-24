import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google';

// IMPORTAÇÃO NOVA (Sem chaves, nome novo):
import PixelFacebook from "@/components/PixelFacebook";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Paulo Cesar - Aulas de Tráfego Pago e IA",
  description: "Aulas 1:1 para você aplicar agora. Transforme cliques em vendas.",
  openGraph: {
    title: "Paulo Cesar - Aulas de Tráfego Pago e IA",
    description: "Transforme cliques em vendas com aulas particulares e estratégicas.",
    images: ['/images/paulo-hero-nova.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.className} bg-gray-950 text-white antialiased`}>
        {children}

        {/* --- RASTREAMENTO --- */}
        <GoogleAnalytics gaId="G-GYR5QWSWK2" />
        
        {/* COMPONENTE NOVO: */}
        <PixelFacebook />
        
      </body>
    </html>
  );
}