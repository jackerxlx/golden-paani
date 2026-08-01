import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import Product from "../src/models/Product.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({
  path: path.join(__dirname, "../.env.local"),
});

const products = [
  {
    name: "Golden Paani Face Wash",
    slug: "golden-paani-face-wash",
    category: "Daily Cleanser",
    price: 299,
    oldPrice: 399,
    image: "/images/products/facewash.png",
    badge: "BEST SELLER",
    description:
      "Premium face wash that deeply cleanses your skin while maintaining natural moisture.",
    benefits: [
      "Deep Cleansing",
      "Removes Dirt & Oil",
      "Hydrates Skin",
      "Suitable for Daily Use",
    ],
    ingredients: [
      "Aloe Vera",
      "Vitamin E",
      "Neem Extract",
      "Tea Tree Oil",
    ],
    stock: 100,
    featured: true,
  },
  {
    name: "Golden Paani Toner",
    slug: "golden-paani-toner",
    category: "Skin Toner",
    price: 399,
    oldPrice: 499,
    image: "/images/products/toner.png",
    badge: "NEW",
    description:
      "Refreshing toner that tightens pores and prepares skin for moisturization.",
    benefits: [
      "Refreshes Skin",
      "Tightens Pores",
      "Hydrates",
      "Balances pH",
    ],
    ingredients: [
      "Rose Water",
      "Witch Hazel",
      "Green Tea",
      "Niacinamide",
    ],
    stock: 100,
    featured: true,
  },
];

async function seedDatabase() {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error("❌ MONGODB_URI not found in .env.local");
    }

    await mongoose.connect(process.env.MONGODB_URI);

    console.log("✅ MongoDB Connected");

    await Product.deleteMany({});
    console.log("🗑 Old Products Deleted");

    await Product.insertMany(products);
    console.log("🎉 Products Inserted Successfully");

    await mongoose.disconnect();
    console.log("✅ Database Disconnected");

    process.exit(0);
  } catch (error) {
    console.error("❌ Seed Error:", error);
    process.exit(1);
  }
}

seedDatabase();