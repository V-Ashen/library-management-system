import { NextResponse } from "next/server";
import { connectDB } from "../../../lib/mongodb";
import ContactMessage from "../../../models/ContactMessage";

export async function POST(request) {
  try {
    // 1. This is where we finally call the database! You will see the ✅ in terminal now.
    await connectDB();

    // 2. Get the data from the frontend form
    const body = await request.json();

    // 3. Save the data to MongoDB using our Schema
    const newMessage = await ContactMessage.create(body);

    // 4. Send a success response back to the frontend
    return NextResponse.json(
      { success: true, message: "Message sent successfully!", data: newMessage },
      { status: 201 }
    );

  } catch (error) {
    console.error("Error saving message:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectDB();
    // Fetch all messages, sort by newest first
    const messages = await ContactMessage.find().sort({ createdAt: -1 });
    
    return NextResponse.json({ success: true, data: messages }, { status: 200 });
  } catch (error) {
    console.error("Error fetching messages:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch messages." },
      { status: 500 }
    );
  }
}