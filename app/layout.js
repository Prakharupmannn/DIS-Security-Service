import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], variable: "--font-poppins", display: "swap" });

export const metadata = {
  title: "DIS Security Services | Market Leader in Security Solutions | Always By Your Side",
  description: "DIS Security Services delivers industry-leading ManTech security solutions, combining disciplined manpower with smart electronic surveillance, e-surveillance, and 24x7 alarm response across India.",
  openGraph: {
    title: "DIS Security Services | Always By Your Side",
    description: "Pioneering the ManTech model: integrating trained security personnel with modern technology for a safer tomorrow.",
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
