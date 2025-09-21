import UserProfile from "@/components/UserProfile";
import ProfileButtons from "@/components/ProfileButtons";
import Portfolio from "@/components/Portfolio";

import PortfolioContent from "@/components/PortfolioContent";
export default function Dashboard() {
    return (
        <div className="md:w-5xl min-h-screen md:mx-auto p-4 pt-12 md:  md: border-yellow-500/10 flex flex-col max-md:items-center  gap-12">
            <div className="flex justify-around items-center gap-4  p-2">
                <div className="flex flex-col gap-8 ">
                    <UserProfile />
                    <p className="">I am a music producer and I love to make music</p>
                    <ProfileButtons />
                </div>
                <div className="max-md:hidden gap-0 rounded-xl text-right">
                    <span className="text-2xl font-semibold  w-full font-mono text-yellow-50  bg-zinc-800 p-1 px-4 rounded-t-xl">Featured</span>
                    <PortfolioContent src="https://www.youtube.com/embed/_aCQu35NA7M" aspect="square" featured={true} />
                </div>
            </div>
            <h1 className="text-2xl font-bold font-mono  text-left w-full">Portfolio</h1>
            <Portfolio />
        </div>
    )
}