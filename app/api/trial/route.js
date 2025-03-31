import { NextResponse } from "next/server";
import connectDB from "@/db/connect";
import sendOtpEmail from "@/actions/user/generateOtp";

export async function GET() {
    try {
        const res = await sendOtpEmail("vaibhavgupta11j@gmail.com",123456);
        return NextResponse.json({res});
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to send otp" },
            { status: 500 }
        );
    }
}
