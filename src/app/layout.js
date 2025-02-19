import "./globals.css";
import { Urbanist } from "next/font/google";
const redHat = Urbanist({ subsets: ["latin"] });

export const metadata = {
  title: "Al-Jidar",
  description: "Trusted, experienced, quality-driven",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${redHat.className} text-secondary font-medium bg-white`}>
        {children}
      </body>
    </html>
  );
}
