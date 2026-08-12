import { Poppins, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata = {
  title: "Golden Paani | Premium Skincare",
  description:
    "Luxury skincare crafted with natural ingredients.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${cormorant.variable}`}
    >
      <body>
        <CartProvider>
          <Navbar />
          
          {children}
        </CartProvider>
      </body>
    </html>
  );
}