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
  metadataBase: new URL("https://goldenpaani.com"),

  title: {
    default: "Golden Paani | Premium Skincare & Beauty",
    template: "%s | Golden Paani",
  },

  description:
    "Discover Golden Paani's premium skincare collection, including face wash, toner, serum and moisturizer designed for an elegant everyday skincare ritual.",

  keywords: [
    "Golden Paani",
    "Golden Paani skincare",
    "premium skincare",
    "luxury skincare",
    "face wash",
    "toner",
    "serum",
    "moisturizer",
    "skincare products India",
    "premium beauty products",
  ],

  authors: [
    {
      name: "Golden Paani",
    },
  ],

  creator: "Golden Paani",

  publisher: "Golden Paani",

  applicationName: "Golden Paani",

  category: "Beauty & Personal Care",

  alternates: {
    canonical: "https://goldenpaani.com",
  },

  openGraph: {
    title: "Golden Paani | Premium Skincare & Beauty",
    description:
      "Premium skincare crafted for an elegant everyday ritual. Discover the Golden Paani collection.",
    url: "https://goldenpaani.com",
    siteName: "Golden Paani",
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Golden Paani | Premium Skincare & Beauty",
    description:
      "Discover the Golden Paani premium skincare collection.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en-IN"
      className={`${poppins.variable} ${cormorant.variable}`}
    >
      <body
        className="
          min-h-screen
          bg-[#F8F3E8]
          font-[var(--font-poppins)]
          text-[#17140D]
          antialiased
        "
      >
        <CartProvider>

          {/* =========================================
              GLOBAL NAVBAR
          ========================================= */}

          <Navbar />

          {/* =========================================
              PAGE CONTENT
          ========================================= */}

          {children}

        </CartProvider>
      </body>
    </html>
  );
}