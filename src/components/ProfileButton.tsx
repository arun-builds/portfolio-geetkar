import { Button } from "./ui/button";
import { Youtube,  } from "lucide-react";

export default function ProfileButton({ platform }: { platform: string }) {
    return (
        <div className=" ">
            <span className={`text-sm text-yellow-50 bg-gray-200/20 rounded-t-md p-1 w-full px-4 ${platform === "other" ? "hidden" : ""}`}>200k listners</span>
        <Button className={`${platform === "other" ? "bg-transparent text-gray-100 p-2 border-2" : "rounded-t-none"} w-full `}>
           {platform === "youtube" ? <Youtube className="text-red-500" /> : platform === "spotify" ? <Youtube className="text-green-500" /> : null }
            <h3 className="text-md">{platform === "youtube" ? "Youtube" : platform === "spotify" ? "Spotify" : "Others..."}</h3>
        </Button>
        </div>
    )
}