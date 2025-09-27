import { prisma } from "@/lib/database";
import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
export async function DELETE(request: Request) {
    const { linkId } = await request.json();
   
    const session = await auth.api.getSession({
        headers: await headers()
    });
    if(!session){
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    if(!session.user.id){
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        console.log("i nside am deleted api route",linkId);
        const deletedProfileLink = await prisma.profileLink.delete({
            where: { id: linkId, userId: session.user.id }
        });
        console.log("i am deleted appi route",deletedProfileLink);
        return NextResponse.json({ message: "Profile link deleted" });
    } catch (error) {
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
    
}