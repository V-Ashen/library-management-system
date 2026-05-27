import mongoose from "mongoose";

const ServiceBookingSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  serviceRequested: { type: String, required: true },
  requestedDate: { type: String, required: true },
  status: { type: String, default: "Pending" }
}, { timestamps: true });

export default mongoose.models.ServiceBooking || mongoose.model("ServiceBooking", ServiceBookingSchema);