import mongoose from "mongoose";

const ContactMessageSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Full name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
    },
    phone: {
      type: String,
      // Phone is optional based on our UI
    },
    subject: {
      type: String,
      required: [true, "Subject is required"],
    },
    message: {
      type: String,
      required: [true, "Message is required"],
    },
  },
  {
    // This automatically adds 'createdAt' and 'updatedAt' timestamps!
    timestamps: true, 
  }
);

// This checks if the model already exists before creating a new one (important for Next.js)
export default mongoose.models.ContactMessage || mongoose.model("ContactMessage", ContactMessageSchema);