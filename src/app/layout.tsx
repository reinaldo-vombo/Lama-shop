import type { Metadata } from "next";
import { Inter, Archivo, Montserrat } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });
const archivo = Archivo({ subsets: ["latin"], weight: ["500"], display: 'swap', variable: '--font-archivo' })
const montserrat = Archivo({ subsets: ["latin"], weight: ["200", "400", "500"], display: 'swap', variable: '--font-montserrat' })

export const metadata: Metadata = {
  title: "Redxp | loja virtual",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} ${archivo.className}`}>
        {children}
        <Toaster
          position="bottom-right"
        />
      </body>
    </html>
  );
}
