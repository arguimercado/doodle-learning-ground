import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { Course } from "@prisma/client";
import { NextResponse } from "next/server";


export async function POST(req: Request) {
    try {
        const {userId} = auth();
        
        if(!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }



        const {title,description,author,price} = await req.json() as Course;
        const course = await db.course.create({
            data: {
                userId,
                title,
                description,
                author,
                price,
            }
        });
        
        return NextResponse.json(course);
    }
    catch(err) {
        console.log("[COURSES POST ERROR]", err);
        return new NextResponse("Internal Server Error", { status: 500 });
        
    }
}

export async function GET(req: Request) {
    try {
        const {userId} = auth();
        console.log(userId);
        if(!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        const course = await db.course.findFirstOrThrow({
            where: {
                userId,
                id: req.params.courseId as string
            }
        });

        return NextResponse.json(course);
        
    }
    catch(err) {
        console.log("[COURSES GET ERROR]", err);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
} 