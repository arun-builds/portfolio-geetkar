"use client";
import UserAvatar from "@/components/UserAvatar";
import { Kanban, MapPin, Pencil } from "lucide-react";
import { useEditMode } from "@/contexts/EditModeContext";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { useState } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
export default function UserProfile({ userImage, name, username, profession, location }: { userImage: string, name: string, username: string, profession: string, location: string }) {

    const { isEditMode, toggleEditMode } = useEditMode();
    const [dialogOpen, setDialogOpen] = useState(false);


    const handleSubmit = async (formData: FormData) => {
        // const userImage = formData.get("userImage");
        const nameForm = formData.get("name");
        const usernameForm = formData.get("username");
        const professionForm = formData.get("profession");
        const locationForm = formData.get("location");
        try {
            // throw new Error("Test error");
        await authClient.updateUser({ image: userImage as string, name: nameForm as string, username: usernameForm as string, profession: professionForm as string, location: locationForm as string });
            router.refresh();
            setDialogOpen(false);
        } catch (error) {
        
            console.error(error);
        }
    }
    const router = useRouter();
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
                        <span className="flex items-center gap-1"><Kanban size={16} /> <p className="text-md  text-gray-100 ">{profession}</p></span>
                        <span className="flex items-center gap-1"><MapPin size={16} /> <p className="text-sm text-gray-100 ">{location}</p></span>
                    </div>
                </div>
            </div>
            <div>
                <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                    <DialogTrigger><Pencil size={20} className={`${isEditMode ? "" : "hidden"} hover:cursor-pointer hover:text-yellow-400`} /></DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Edit Profile</DialogTitle>
                            <DialogDescription>
                                Edit your profile information.
                            </DialogDescription>
                        </DialogHeader>
                        <form action={handleSubmit} className="flex flex-col gap-2">
                            {/* <Label htmlFor="userImage">User Image</Label>
                        <Input type="text" name="userImage" id="userImage" value={newUserImage} onChange={(e) => setNewUserImage(e.target.value)} /> */}
                            <Label htmlFor="name">Name</Label>
                            <Input type="text" name="name" id="name" defaultValue={name}  />
                            <Label htmlFor="username">Username</Label>
                            <Input type="text" name="username" id="username" defaultValue={username}  />
                            <Label htmlFor="profession">Profession</Label>
                            <Input type="text" name="profession" id="profession" defaultValue={profession}  />
                            <Label htmlFor="location">Location</Label>
                            <Input type="text" name="location" id="location" defaultValue={location}  />
                            <Button type="submit">Save</Button>
                        </form>
                    </DialogContent>
                </Dialog>
            </div>

        </div>
    )
}