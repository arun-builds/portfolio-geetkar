"use client";
import { Pencil } from "lucide-react";
import ProfileButton from "./ProfileButton";
import { useEditMode } from "@/contexts/EditModeContext";
import { DialogTitle, Dialog, DialogTrigger, DialogContent, DialogHeader, DialogDescription } from "./ui/dialog";

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
            <div>
                <Dialog>
                    <DialogTrigger><Pencil size={20} className={`${isEditMode ? "" : "hidden"} hover:cursor-pointer hover:text-yellow-400`} /> </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Edit Links</DialogTitle>
                            <DialogDescription>
                                Edit your profile links.
                            </DialogDescription>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>

            </div>
        </div>
    )
}