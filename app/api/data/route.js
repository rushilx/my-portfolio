import { NextResponse } from "next/server";

// This route will be handled by Netlify functions in production
export const dynamic = "force-static";
export const dynamicParams = false;
export const revalidate = false;

export async function GET(request) {
  return NextResponse.json({
    success: true,
    message: 'hle!',
    data: {
      message: 'Message and email sent successfully!',
    }
  }, { status: 200 });
};