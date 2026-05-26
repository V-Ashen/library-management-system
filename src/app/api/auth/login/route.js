import { NextResponse } from "next/server";
import { connectDB } from "../../../../lib/mongodb";
import AdminUser from "../../../../models/AdminUser";

export async function POST(request) {
  try {
    await connectDB();
    const { email, password } = await request.json();
    
    console.log("👉 Login Attempt Email:", email);

    // 1. Find the admin (using trim to remove accidental spaces)
    const admin = await AdminUser.findOne({ email: email.trim() });
    
    console.log("👉 Database returned:", admin);

    if (!admin) {
      console.log("❌ Error: Could not find that email in the database.");
      return NextResponse.json({ success: false, message: "Email not found in database" }, { status: 401 });
    }

    // 2. Check password 
    if (admin.password !== password.trim()) {
      console.log(`❌ Error: Passwords don't match! DB password is '${admin.password}' but you typed '${password}'`);
      return NextResponse.json({ success: false, message: "Incorrect password" }, { status: 401 });
    }

    console.log("✅ Login Successful!");

    // 3. Create a success response
    const response = NextResponse.json(
      { success: true, message: "Login successful" },
      { status: 200 }
    );

    // 4. Set a secure cookie
    response.cookies.set({
      name: 'admin_session',
      value: 'authenticated',
      httpOnly: true,
      path: '/',
      maxAge: 60 * 60 * 24, // 1 day
    });

    return response;

  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}