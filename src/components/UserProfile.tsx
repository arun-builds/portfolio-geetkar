"use client";
import UserAvatar from "@/components/UserAvatar";
import { Kanban, Landmark, MapPin, Pencil } from "lucide-react";
import { useEditMode } from "@/contexts/EditModeContext";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import UserEdit from "./EditUser";
export default function UserProfile({ userImage, name, username }: { userImage: string, name: string, username: string }) {
    const { isEditMode, toggleEditMode } = useEditMode();
    return (
        <div className="flex gap-4">
            <div className={`flex items-center  gap-4 ${isEditMode ? "bg-zinc-800 p-2 rounded-xl border" : ""}`}>

                <UserAvatar usedIn="profile" src={userImage} />

                <div className="flex flex-col gap-1 ">
                    <div className="flex items-center justify-center gap-2">
                        <h1 className="text-2xl font-bold">{name}</h1>
                        <h4 className="text-sm text-gray-500">@{username}</h4>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="flex items-center gap-1"><Kanban size={16} /> <p className="text-md  text-gray-100 ">Music Producer</p></span>
                        <span className="flex items-center gap-1"><MapPin size={16} /> <p className="text-sm text-gray-100 ">Mumbai, India</p></span>
                    </div>
                </div>
            </div>
            <div>
            <Dialog >
                <DialogTrigger><Pencil size={20} className={`${isEditMode ? "" : "hidden"} hover:cursor-pointer hover:text-yellow-400`} /></DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Edit Profile</DialogTitle>
                            <DialogDescription>
                                Edit your profile information.
                            </DialogDescription>
                    </DialogHeader>
                    <UserEdit />
                    </DialogContent>
            </Dialog>
            </div>

        </div>
    )
}