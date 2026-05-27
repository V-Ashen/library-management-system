import { NextResponse } from "next/server";
import { connectDB } from "../../../lib/mongodb";
import Book from "../../../models/Book";

// Fetch all books
export async function GET() {
  try {
    await connectDB();
    const books = await Book.find().sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: books });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Server Error" }, { status: 500 });
  }
}

// Add a new book (Admin feature)
export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();
    const newBook = await Book.create(body);
    return NextResponse.json({ success: true, data: newBook });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Server Error" }, { status: 500 });
  }
}