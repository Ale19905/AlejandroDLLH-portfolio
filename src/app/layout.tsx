import type { Metadata } from "next";
import "./globals.css";
import '@mantine/core/styles.css';
import { ColorSchemeScript, MantineProvider} from '@mantine/core';
import { Analytics } from "@vercel/analytics/react";
import Menu from "@/components/menu";
import { inter, whisper } from "./fonts";

import data from '@/data/data.json';

export const metadata: Metadata = {
  title: {
    template: data.meta.title.template,
    default: data.meta.title.default,
  },
  description: data.meta.description,
  twitter: {
    card: 'summary_large_image',
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="viewport-fit=cover" />
        <ColorSchemeScript />
      </head>

      <body className={`${inter.className} ${whisper.variable} antialiased relative text-white`}>
        <MantineProvider defaultColorScheme="dark">
          {children}
          <Menu />
        </MantineProvider>

        <Analytics />
      </body>
    </html>
  );
}
