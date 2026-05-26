import { NextResponse } from "next/server";
import { connectDB } from "../../../../lib/mongodb";
import ContactMessage from "../../../../models/ContactMessage";

// Notice we changed this line slightly to handle the Promise
export async function DELETE(request, props) {
  try {
    await connectDB();
    
    // NEW NEXT.JS REQUIREMENT: We must await the params!
    const params = await props.params;
    const id = params.id;

    // Tell MongoDB to find and delete the message with this ID
    const deletedMessage = await ContactMessage.findByIdAndDelete(id);

    if (!deletedMessage) {
      return NextResponse.json({ success: false, message: "Message not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: "Message deleted successfully" }, { status: 200 });

  } catch (error) {
    console.error("Error deleting message:", error);
    return NextResponse.json({ success: false, message: "Failed to delete message" }, { status: 500 });
  }
}