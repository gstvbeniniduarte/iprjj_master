import "./globals.css";
import type { Metadata } from "next";
import Footer from "@/components/shared/Footer/Footer";
import { interFont } from "@/constants/Index";
import NavLayout from "@/components/shared/NavLayout";

export const metadata: Metadata = {
  title: "6ª IPR - Jardim Jacarandá",
  description:
    "Sexta Igreja Presbiteriana Renovada do Jardim Jacarandá em Campo Grande no Mato Grosso do Sul.",
  keywords: [
    "IPR",
    "igreja",
    "Renovada",
    "evangélica",
    "Presbiteriana",
    "Jardim Jacarandá",
    "Campo Grande",
    "MS",
  ],
  icons: {
    icon: "/assets/images/icons/logo.svg",
    apple: "/assets/images/icons/logo.svg",
    shortcut: "/assets/images/icons/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={interFont.variable}>
      <body>
        <NavLayout />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
