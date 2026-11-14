import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], variable: "--font-poppins", display: "swap" });

export const metadata = {
  title: "DIS Security | Always By Your Side",
  description: "DIS Security delivers world-class manpower, electronic, event, VIP and corporate security solutions across India.",
  openGraph: {
    title: "DIS Security | Always By Your Side",
    description: "World-class security solutions for a safer and more secure tomorrow.",
    type: "website",
  },
};
export const viewport = { width: "device-width", initialScale: 1, themeColor: "#061735" };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
