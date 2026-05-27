import { NextResponse } from "next/server";
import { connectDB } from "../../../lib/mongodb";
import ServiceBooking from "../../../models/ServiceBooking";

// Admin fetches all bookings
export async function GET() {
  try {
    await connectDB();
    const bookings = await ServiceBooking.find().sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: bookings });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Server Error" }, { status: 500 });
  }
}

// User submits a booking form
export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();
    const newBooking = await ServiceBooking.create(body);
    return NextResponse.json({ success: true, message: "Booking received successfully!" });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Failed to book service." }, { status: 500 });
  }
}