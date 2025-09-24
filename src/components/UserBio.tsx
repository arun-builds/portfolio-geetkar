"use client";
import { useEditMode } from "@/contexts/EditModeContext";
import { Pencil } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { useState } from "react";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function UserBio({ bio }: { bio: string }) {
    const { isEditMode, toggleEditMode } = useEditMode();
    const [dialogOpen, setDialogOpen] = useState(false);
    const handleSubmit = async (formData: FormData) => {
        const bio = formData.get("bio");
        await authClient.updateUser({ bio: bio as string });
        router.refresh();
        setDialogOpen(false);
    }
    const router = useRouter();
    return (
        <div>
        <span className="flex items-center gap-2">
            <p className={`${isEditMode ? " bg-zinc-800 p-2 px-4 rounded-xl border" : ""} italic`} >{bio}</p>
            {/* <Pencil size={20} className={`${!isEditMode ? "hidden" : ""} hover:cursor-pointer hover:text-yellow-400`} /> */}
        
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                <DialogTrigger><Pencil size={20} className={`${isEditMode ? "" : "hidden"} hover:cursor-pointer hover:text-yellow-400`} /></DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Edit Bio</DialogTitle>
                            <DialogDescription>
                                Edit your bio.
                            </DialogDescription>
                    </DialogHeader>
                    <form action={handleSubmit} className="flex flex-col gap-2">
                        <Label htmlFor="bio">Bio</Label>
                        <Input type="text" name="bio" id="bio" defaultValue={bio} />
                        <Button type="submit">Save</Button>
                    </form>
                    </DialogContent>
            </Dialog>
            </span>
        </div>
    )
}
