"use client";
import { Pencil } from "lucide-react";
import ProfileButton from "./ProfileButton";
import { useEditMode } from "@/contexts/EditModeContext";

export default function ProfileButtons() {
    const { isEditMode, toggleEditMode } = useEditMode();
    return (
        <div className="flex gap-4">
        <div className={`grid grid-cols-2 max-md:justify-center gap-4 w-full items-end ${isEditMode ? "bg-zinc-800 p-2 rounded-xl border" : ""}`}>
            <ProfileButton platform="youtube" />
            <ProfileButton platform="spotify" />
            <ProfileButton platform="youtube" />
            <ProfileButton platform="other" />
        </div>
        <Pencil size={20} className={`${isEditMode ? "" : "hidden"} `} />
        </div>
    )
}