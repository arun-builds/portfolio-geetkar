"use client";
import UserAvatar from "@/components/UserAvatar";
import { Pencil } from "lucide-react";
import { useEditMode } from "@/contexts/EditModeContext";
export default function UserProfile({ userImage, name, username }: { userImage: string, name: string, username: string }) {
    const { isEditMode, toggleEditMode } = useEditMode();
    return (
        <div className="flex gap-4">
        <div className={`flex items-center  gap-4 ${isEditMode ? "bg-zinc-800 p-2 rounded-xl border" : ""}`}>

            <UserAvatar usedIn="profile" src={userImage} />

            <div className="flex flex-col gap- ">
                <div className="flex items-center justify-center gap-2">
                    <h1 className="text-2xl font-bold">{name}</h1>
                    <h4 className="text-sm text-gray-500">@{username}</h4>
                </div>
                <div>
                    <p className="text-sm text-gray-100">Music Producer</p>
                    {/* <p className="text-sm text-gray-100">Mumbai, India</p> */}
                </div>
            </div>
        </div>
        <Pencil size={20} className={`${isEditMode ? "" : "hidden"}`} />
        </div>
    )
}