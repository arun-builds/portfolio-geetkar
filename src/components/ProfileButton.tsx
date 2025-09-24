import { Button } from "./ui/button";
import { Pencil, Youtube, } from "lucide-react";
import { useEditMode } from "@/contexts/EditModeContext";

export default function ProfileButton({ platform }: { platform: string }) {
    const { isEditMode, toggleEditMode } = useEditMode();
    return (
        <div className=" ">
            <span className={`text-sm text-yellow-50 bg-gray-200/20 rounded-t-md p-1 w-full px-4 border ${platform === "other" ? "hidden" : ""}`}>200k listners</span>
            <div className={`${platform === "other" ? "bg-zinc-800 text-gray-100 p-1 border hover:bg-zinc-800/80 transition-all" : "rounded-t-none"} w-full ${isEditMode && platform !== "other" ? "flex items-center justify-between" : ""} border flex items-center justify-center gap-2 bg-white  text-black p-1 rounded-md hover:cursor-pointer hover:bg-gray-200/100 transition-all`}>
                {platform === "youtube" ? <Youtube className="text-red-500" /> : platform === "spotify" ? <Youtube className="text-green-500" /> : null}
                <h3 className="text-md flex items-center gap-4">
                    {platform === "youtube" ? "Youtube" : platform === "spotify" ? "Spotify" : "More.. "}

                </h3>
                <Pencil size={14} className={`${platform === "other" || !isEditMode ? "hidden" : ""}`} />
            </div>

        </div>
    )
}