import "./globals.css";
import { Montserrat } from "next/font/google";
import avatar from "@/src/assets/photo/avatar.png";
import { StyleContextProvider } from "./contexts/styleContext";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Kanit:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <title>Khanh Duy | Personal</title>
        <meta
          name="description"
          content="Khanh Duy's personal portfolio website"
        />

        <meta property="og:url" content="https://www.khanhduy.site/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Khanh Duy | Personal" />
        <meta
          property="og:description"
          content="Khanh Duy's personal portfolio website"
        />
        <meta property="og:image" content={avatar.src} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="khanhduy.site" />
        <meta property="twitter:url" content="https://www.khanhduy.site/" />
        <meta name="twitter:title" content="Khanh Duy | Personal" />
        <meta
          name="twitter:description"
          content="Khanh Duy's personal portfolio website"
        />
        <meta name="twitter:image" content={avatar.src} />
      </head>
      <body className={montserrat.className}>
        <StyleContextProvider>
          <>
            <main>{children}</main>
          </>
        </StyleContextProvider>
      </body>
    </html>
  );
}
