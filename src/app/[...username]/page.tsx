import UserProfile from "@/components/UserProfile";
import ProfileButtons from "@/components/ProfileButtons";
import Portfolio from "@/components/Portfolio";
import AppHeader from "@/components/AppHeader";
import PortfolioContent from "@/components/PortfolioContent";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

import UserBio from "@/components/UserBio";
export default async function Dashboard({ params }: { params: { username: string[] } }) {
const param = await params;
    console.log(param.username[0]);
    const session = await auth.api.getSession({
        headers: await headers()
    })

    console.log(session);

    
    
    return (
        <div className="md:w-6xl min-h-screen md:mx-auto p-4  md:  md: border-yellow-500/10 flex flex-col max-md:items-center  gap-8">
            <AppHeader userImage={session?.user?.image || ""} />
            <div className="flex justify-around items-center gap-4  p-2">
                <div className="flex flex-col gap-8 max-w-lg min-w-lg">
                    <UserProfile userImage={session?.user?.image || ""} name={session?.user?.name || ""} username={session?.user?.username || ""} profession={session?.user?.profession || ""} location={session?.user?.location || ""} />
                    <UserBio bio={session?.user?.bio || ""} />
                    <ProfileButtons />
                </div>
                <div className="max-md:hidden gap-0 rounded-xl text-right">
                    <span className="text-2xl font-semibold  w-full font-mono text-yellow-50  bg-zinc-800 p-1 px-4 rounded-t-xl">Featured</span>
                    <PortfolioContent src="https://www.youtube.com/embed/_aCQu35NA7M" aspect="square" featured={true} />
                </div>
            </div>
            
            <Portfolio />
        </div>
    )
}