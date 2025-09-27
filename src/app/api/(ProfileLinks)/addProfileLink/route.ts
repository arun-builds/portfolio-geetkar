import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { prisma } from "@/lib/database";

export async function POST(request: Request) {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    if(!session){
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    if(!session.user.id){
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const { platform, url, followers } = await request.json();
    try {
        const profileLink = await prisma.profileLink.create({
            data: { platform, url, userId: session.user.id, followers: followers }
        });
        return NextResponse.json(profileLink);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
   
   
}