import { NextResponse } from "next/server";

export async function GET() {
    return await NextResponse.json({ message: "Hello, World!" });
}