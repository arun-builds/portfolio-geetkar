import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { prisma } from "@/lib/database";
export async function GET(request: Request) {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    if(!session){
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    if(!session.user.id){
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const profileLinks = await prisma.profileLink.findMany({
        where: {
            userId: session.user.id
        }
    });
    return NextResponse.json(profileLinks);
}