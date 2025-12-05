//imports af egne komponenter
import "./globals.css";
import "./reset.css";
import Header from "@/components/global/header/Header";
import Footer from "@/components/global/Footer";

export const metadata = {
  title: "Bellevue Teatret",
  description: "Bellevue Teatret",
};

export const viewport = {
  viewport: "width=device-width, initial-scale=1",
  charset: "UTF-8",
};

export default function RootLayout({ children }) {
  return (
    <html lang="da">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Oswald:wght@200..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <header>
          <Header />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
