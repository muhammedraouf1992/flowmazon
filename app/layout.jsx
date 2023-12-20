import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "../app/components/Footer";
import { SessionProvider } from "./SessionProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Flowmazon",
  description: "we make your wallet cry",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <main className="container mx-auto">
            <Navbar />
            {children}
          </main>
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
