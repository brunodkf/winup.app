import type { Metadata } from 'next'
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat-sans",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: 'Winup Network Ads | Conectando Publishers',
  description: 'Monetize seu conteúdo com transparência usando integração full-stack com Google Ad Manager, Prebid.js e dashboards em tempo real.',
  keywords: [
    'monetização de conteúdo',
    'transparência em anúncios',
    'Google Ad Manager',
    'Prebid.js',
    'dashboards em tempo real',
    'integração full-stack',
    'otimização de receita',
    'gestão de anúncios digitais',
    'análise de performance',
    'ad tech',
  ],
  icons: {
    icon: "/favicon.ico",
  },
  authors: [{ name: 'Bruno Furtado', url: 'https://brunodkf.vercel.app' }],
  creator: 'Bruno Furtado',
  openGraph: {
    title: 'Winup Network Ads | Monetize seu Conteúdo',
    description: 'Integração full-stack com Google Ad Manager, Prebid.js e dashboards em tempo real para publishers que querem otimizar receita com transparência.',
    url: 'https://app.winup.network/',
    siteName: 'Winup Network Ads',
    images: [
      {
        url: 'https://app.winup.network/assets/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Winup Network Ads - Monetize seu Conteúdo com Transparência',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${montserrat.variable} antialiased text-branco overflow-x-clip`}
      >
        {children}
      </body>
    </html>
  );
}
