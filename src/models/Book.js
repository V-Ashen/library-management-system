import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  image: { type: String, required: true },
  category: { type: String, default: "General" },
  badgeText: { type: String }, // e.g., "RESERVED" or "OUT OF STOCK"
  badgeType: { type: String }, // 'light' or 'dark'
}, { timestamps: true });

export default mongoose.models.Book || mongoose.model("Book", BookSchema);