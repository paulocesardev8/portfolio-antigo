import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sintonia Solutions - Aulas de Tráfego", // ou o título que preferir
  description: "Transforme cliques em vendas com aulas de Tráfego Pago e IA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      {/* A MUDANÇA É AQUI!
        Adicionamos 'bg-gray-950' para um fundo quase preto e 'text-white' como cor padrão do texto.
      */}
      <body className={`${inter.className} bg-gray-950 text-white`}>
        {children}
      </body>
    </html>
  );
}