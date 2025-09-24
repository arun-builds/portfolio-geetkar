"use client";
import { Pencil } from "lucide-react";
import ProfileButton from "./ProfileButton";
import { useEditMode } from "@/contexts/EditModeContext";
import { DialogTitle, Dialog, DialogTrigger, DialogContent, DialogHeader, DialogDescription } from "./ui/dialog";
import { ReactElement, useEffect, useState } from "react";
import AllProfileButtons from "./AllProfileButtons";


export default function ProfileButtons() {
    const { isEditMode, toggleEditMode } = useEditMode();
    
  
   
    return (
        < div className={`grid grid-cols-2 max-md:justify-center gap-4 w-full items-end ${isEditMode ? "bg-zinc-800 p-4 rounded-xl border " : ""} `}>

            <ProfileButton platform="youtube" />
            <ProfileButton platform="spotify" />
            <ProfileButton platform="youtube" />

            <Dialog>
                <DialogTrigger><ProfileButton platform="other" /></DialogTrigger>
                <DialogContent>
                    <DialogTitle>Add Profile</DialogTitle>
                    <AllProfileButtons />
                </DialogContent>
            </Dialog>
        </div>
    )
}

