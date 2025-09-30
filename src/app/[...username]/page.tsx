import UserProfile from "@/components/UserProfile";
import ProfileButtons from "@/components/ProfileButtons";
import Portfolio from "@/components/Portfolio";
import AppHeader from "@/components/AppHeader";
import PortfolioContent from "@/components/PortfolioContent";
import { prisma } from "@/lib/database";

import UserBio from "@/components/UserBio";
export default async function Dashboard({ params }: { params: { username: string[] } }) {
const param = await params;
const username = param.username[0];
    console.log(param.username[0]);
    

   const user = await prisma.user.findUnique({
    where: { username}
   });
   if(!user){
    return <div>User not found</div>;
   }

   
    
    
    return (
        <div className="md:w-6xl min-h-screen md:mx-auto p-4  md:  md: border-yellow-500/10 flex flex-col max-md:items-center  gap-8">
            <AppHeader userImage={user?.image || ""} />
            <div className="flex justify-around items-center gap-4  p-2">
                <div className="flex flex-col gap-8 max-w-lg min-w-lg ">
                    <UserProfile userImage={user?.image || ""} name={user?.name || ""} username={user?.username || ""} profession={user?.profession || ""} location={user?.location || ""} />
                    <UserBio bio={user?.bio || ""} />
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