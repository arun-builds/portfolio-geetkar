import { NextResponse } from "next/server";
import { type NextRequest } from 'next/server'
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { prisma } from "@/lib/database";
export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const username = searchParams.get("username");

    if(!username){
        return NextResponse.json({ error: "Username is required" }, { status: 400 });
    }

    const profileLinks = await prisma.user.findUnique({
        where: { username },
        select: {
            profileLinks: true
        }
    });
    
    
    return NextResponse.json(profileLinks);
}