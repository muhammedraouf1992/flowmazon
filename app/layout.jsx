import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Flowmazon",
  description: "we make your wallet cry",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Link href={"/add-product"}>add product</Link>
        <main className="container mx-auto">{children}</main>
      </body>
    </html>
  );
}
