import nodemailer from "nodemailer";

const GMAIL_USER = process.env.GMAIL_USER;
const GMAIL_PASSWORD = process.env.GMAIL_PASSWORD;

if (!GMAIL_USER || !GMAIL_PASSWORD) {
  console.warn(
    "Gmail credentials not configured. Email notifications will not work."
  );
}

// Create transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: GMAIL_USER,
    pass: GMAIL_PASSWORD,
  },
});

export async function sendLeadNotificationEmail(
  name: string,
  phone: string,
  recipientEmail: string
) {
  if (!GMAIL_USER || !GMAIL_PASSWORD) {
    console.warn("Gmail not configured, skipping email notification");
    return false;
  }

  try {
    const mailOptions = {
      from: GMAIL_USER,
      to: recipientEmail,
      subject: `🎉 New Lead: ${name} - PowerFit Gym`,
      html: `
        <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">
          <div style="background-color: white; padding: 30px; border-radius: 8px; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #22c55e; margin-bottom: 20px;">🎯 New Trial Lead</h2>
            
            <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
              <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 10px 0;"><strong>Phone:</strong> <a href="tel:+91${phone}" style="color: #22c55e; text-decoration: none;">+91 ${phone}</a></p>
              <p style="margin: 10px 0;"><strong>Submitted:</strong> ${new Date().toLocaleString(
                "en-IN",
                {
                  timeZone: "Asia/Kolkata",
                }
              )}</p>
            </div>
            
            <div style="margin-bottom: 20px;">
              <p style="color: #666; font-size: 14px;">
                <strong>Quick Action:</strong> Contact them on WhatsApp to confirm their free trial slot.
              </p>
            </div>
            
            <div style="border-top: 1px solid #eee; padding-top: 15px;">
              <a href="https://wa.me/91${phone}" style="background-color: #25D366; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block;">Message on WhatsApp</a>
            </div>
            
            <div style="margin-top: 30px; text-align: center; color: #999; font-size: 12px;">
              <p>PowerFit Gym Lead Management System</p>
            </div>
          </div>
        </div>
      `,
    };

    const result = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", result.messageId);
    return true;
  } catch (error) {
    console.error("Failed to send email:", error);
    return false;
  }
}
