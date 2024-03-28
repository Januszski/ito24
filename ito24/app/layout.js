import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "/components/Nav";
import "bootstrap/dist/css/bootstrap.min.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Todd High School",
  description: "Todd's website",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
