import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });
export const metadata: Metadata = {
  title: "Kenyan - Seu centro de treinamento",
  description: "O melhor centro de treinamento do brasil",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${roboto.className} flex flex-col items-center`}>
        {children}
      </body>
    </html>
  );
}
