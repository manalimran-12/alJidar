import "./globals.css";
import { Red_Hat_Display } from "next/font/google";
 const redHat = Red_Hat_Display({ subsets: ["latin"] })
export const metadata = {
  title: "Al Jidar",
  description: "Trusted, experienced, quality-driven",
  // icons: {
  //   icon: '../public/LocalReviews-LOGO1.svg',
  // },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light">
      <body
        className={`${redHat.className} text-secondary font-medium bg-white`}>
        {children}

      </body>
    </html>
  );
}
