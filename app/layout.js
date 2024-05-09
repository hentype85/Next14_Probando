import "./globals.css";
import Navbar from "../components/navbar";
import { Roboto } from "next/font/google";

export const metadata = {
  title: "Ecommerce App",
  description: "Generated by Next.js",
  keywords: "Next.js, React, JavaScript",
};

const robotoFont = Roboto({
  weight: ["300", "400", "500", "700"],
  styles: ["italic"],
  subsets: ["latin-ext"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={robotoFont.className}>

          <Navbar />

        <main>
          {children}
        </main>

      </body>
    </html>
  );
}