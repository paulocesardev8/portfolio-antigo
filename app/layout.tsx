// Substitua todo o conteúdo do seu arquivo app/layout.tsx por este
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script"; // 1. Importamos o componente Script
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Paulo Cesar - Aulas de Tráfego Pago e IA",
  description: "Aulas 1:1 para você aplicar agora, direto com quem vive disso todos os dias. Transforme cliques em vendas.",
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
    <html lang="pt-BR">
      <body className={`${inter.className} bg-gray-950 text-white`}>
        {children}

        {/* --- INÍCIO DOS SCRIPTS DE RASTREAMENTO --- */}

        {/* 2. GOOGLE TAG (ANALYTICS GA4) */}
        {/* Substitua G-XXXXXXXXXX pelo seu ID da Métrica do Google */}
        <Script 
          strategy="afterInteractive" 
          src={`https://www.googletagmanager.com/gtag/js?id=G-GYR5QWSWK2`}
        />
        <Script 
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-GYR5QWSWK2');
            `,
          }}
        />

        {/* 3. META PIXEL (FACEBOOK/INSTAGRAM) */}
        {/* Substitua YOUR_PIXEL_ID pelo seu ID do Pixel da Meta */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '425164433308044');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img 
            height="1" 
            width="1" 
            style={{display:'none'}}
            src={`https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=PageView&noscript=1`}
          />
        </noscript>

        {/* --- FIM DOS SCRIPTS DE RASTREAMENTO --- */}

      </body>
    </html>
  );
}