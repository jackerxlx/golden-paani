import { Poppins, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

import { CartProvider } from "@/context/CartContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
});

export const metadata = {
  title: "Golden Paani | Premium Skincare",
  description: "Luxury skincare crafted with natural ingredients.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${cormorant.variable}`}
    >
      <body className="font-[var(--font-poppins)] bg-black text-white overflow-x-hidden">
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}