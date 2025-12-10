import { SeparateLayout } from "./SeparateLayout";

import "./reset.css"; 
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="bg-[#EDEDED]">
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>SISPAGE</title>
        <meta name="description" content="SISPAGE - Sistema de gerenciamento e organização de páginas."/>
        <link rel="stylesheet" href="/css/buttons.css" />
        <link rel="stylesheet" href="/css/tooltip.css" />
    </head>
    <body>
      <SeparateLayout>
        {children}
      </SeparateLayout>
    </body>
    </html>
  );
}
