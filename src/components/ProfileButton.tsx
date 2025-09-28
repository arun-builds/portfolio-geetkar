"use client";
import { Pencil, Youtube, } from "lucide-react";
import { useEditMode } from "@/contexts/EditModeContext";
import { useState } from "react";
import { Dialog, DialogTitle, DialogContent, DialogHeader, DialogDescription } from "./ui/dialog";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function ProfileButton({ id, platform,url,handleDeleteProfile }: { id: number, platform: string,url: string,handleDeleteProfile: (id: number) => void }) {

    const { isEditMode, toggleEditMode } = useEditMode();
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const router = useRouter();


const handleSubmit = async (formData: FormData) => {
    console.log(formData);
    
    setIsDialogOpen(false);
    router.refresh();
}
const handleOpenDialog = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setIsDialogOpen(true);

}

const handleNavigate = () => {
   window.open(`https://${platform.toLowerCase()}.com`, "_blank");
}
    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if(isEditMode  ){
            handleOpenDialog(e);
        }else if(!isEditMode && platform !== "other"){
            handleNavigate();
        }
    }
    const handleDelete = async (id: number) => {
        console.log("i am deleted",id);
        try {
            const response = await axios.delete(`/api/deleteProfileLink`, {
                data: { linkId: id }
                });
            console.log("i am response ui",response);
            handleDeleteProfile(id);
            setIsDialogOpen(false);
            router.refresh();
            
            
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className=" ">
            <span className={`text-sm text-yellow-50 bg-gray-200/20 rounded-t-md p-1  px-4 border ${platform === "other" ? "hidden" : ""}`}>200k listners</span>
            <div onClick={handleClick} className={`${platform === "other" ? "bg-zinc-800 text-gray-100 p-1 border hover:bg-zinc-800/80 transition-all" : "rounded-t-none"} w-full ${isEditMode && platform !== "other" ? "flex items-center justify-between" : ""} border flex items-center justify-center gap-2 bg-white  text-black p-1 rounded-md hover:cursor-pointer hover:bg-gray-200/100 transition-all`}>
                {platform === "YouTube" ? <Youtube className="text-red-500" /> : platform === "Spotify" ? <Youtube className="text-green-500" /> : null}
                <h3 className="text-md flex items-center gap-4">
                    {platform === "YouTube" ? "Youtube" : platform === "Spotify" ? "Spotify" : "More.. "}
                </h3>
                <Pencil size={14} className={`${platform === "other" || !isEditMode ? "hidden" : ""}`} />
            </div>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Edit {platform} Profile</DialogTitle>
                        <DialogDescription>
                            Edit your {platform} profile.
                        </DialogDescription>
                    </DialogHeader>
                    <form action={handleSubmit} className="flex flex-col gap-4">
                        <Input type="text" name="url" id="url" placeholder="Enter your url" defaultValue={url} />
                        <div className="flex items-center justify-between">
                        <Button variant="destructive" type="button" onClick={() => handleDelete(id)}>Delete</Button>
                        <Button  type="submit">Save</Button>
                        </div>
                        
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    )
}