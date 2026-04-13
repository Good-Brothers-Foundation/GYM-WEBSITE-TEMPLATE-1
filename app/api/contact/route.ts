import connectDB from "@/lib/mongodb";
import Lead from "@/lib/models/Lead";
import { sendLeadNotificationEmail } from "@/lib/email";

export async function POST(request: Request) {
  try {
    const { name, phone } = await request.json();

    // Validate input
    if (!name || !phone) {
      return Response.json(
        { error: "Name and phone are required" },
        { status: 400 }
      );
    }

    if (!/^\d{10}$/.test(phone.replace(/\s/g, ""))) {
      return Response.json(
        { error: "Invalid phone number. Please enter a 10-digit number." },
        { status: 400 }
      );
    }

    if (name.trim().length < 2) {
      return Response.json(
        { error: "Please enter a valid name" },
        { status: 400 }
      );
    }

    // Connect to MongoDB
    await connectDB();

    // Create and save lead to MongoDB
    const lead = new Lead({
      name: name.trim(),
      phone: phone.replace(/\s/g, ""),
    });

    await lead.save();
    console.log("Lead saved to MongoDB:", lead._id);

    // Send email notification
    const emailSent = await sendLeadNotificationEmail(
      name,
      phone,
      "iam.mayank.kansal.01@gmail.com"
    );

    // Return success response
    return Response.json(
      {
        success: true,
        message: "Lead captured successfully!",
        data: {
          id: lead._id,
          name: lead.name,
          phone: lead.phone,
          timestamp: lead.createdAt,
        },
        emailNotification: emailSent,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return Response.json(
      { error: "Failed to process your request. Please try again." },
      { status: 500 }
    );
  }
}
