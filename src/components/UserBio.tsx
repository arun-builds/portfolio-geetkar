"use client";
import { useEditMode } from "@/contexts/EditModeContext";
import { Pencil } from "lucide-react";

export default function UserBio() {
    const { isEditMode, toggleEditMode } = useEditMode();
    return (
        <span className="flex items-center gap-2">
            <p className={`${isEditMode ? "italic bg-zinc-800 p-2 px-4 rounded-xl border" : ""}`} >I am a music producer and I love to make music and money.</p>
            <Pencil size={20} className={`${!isEditMode ? "hidden" : ""}`} />
        </span>
    )
}