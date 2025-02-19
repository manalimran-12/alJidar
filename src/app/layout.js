import "./globals.css";
import { Urbanist, Instrument_Serif } from "next/font/google";
const urbanist = Urbanist({ subsets: ["latin"] });
 
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
        className={`${urbanist.className} text-secondary font-medium bg-white`}>
        {children}
      </body>
    </html>
  );
}
