import { NextResponse } from "next/server";
import { sendEmail } from "../../../../lib/email";

export async function POST(req) {
    try {
    const body = await req.json();
    const { name, phone, email, service, message} = body;

    if (!name || !email || !phone || !service || !message) {
      return NextResponse.json({ error: "Missing data" }, { status: 400 });
    }

    await sendEmail(process.env.ADMIN_EMAIL, {
        name: name,
        email: email,
        phone: phone,
        service: service,
        message: message
    });

    return NextResponse.json({ success: true});
  } catch (err) {
    console.log(err);
    return NextResponse.json({error: `"Failed to save data". Details: ${err}`}, {status: 500});
  }
}