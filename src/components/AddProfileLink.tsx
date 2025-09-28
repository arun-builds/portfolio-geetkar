"use client";
import { ProfileLink } from "@/lib/database";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { useState } from "react";

export default function AddProfileLink({setProfileLinks,profileLinks}: {setProfileLinks: (profileLinks: ProfileLink[]) => void,profileLinks: ProfileLink[]}) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
    const handleAddProfile = async (formData: FormData) => {
        try {
            const response = await fetch("/api/addProfileLink", {
                method: "POST",
                body: JSON.stringify({ platform: formData.get("platform"), url: formData.get("url"), })
            });
            const data = await response.json();
            console.log(data);
            if(response.ok){
                setProfileLinks([...profileLinks, data]);
                setIsDialogOpen(false);
            }
        } catch (error) {
            
            console.error(error);
            setIsDialogOpen(false);
            
        }

    }

    return (
        <div className="w-full">
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger className="w-full">
                    <div  className="w-full bg-white text-black flex items-center justify-center gap-2 p-1.5 rounded-md  border border-zinc-800 hover:cursor-pointer hover:bg-zinc-200 transition-all">Add Profile <Plus className="font-bold" /></div>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Add Profile</DialogTitle>
                        <DialogDescription>
                            Add a new profile to your portfolio.
                        </DialogDescription>
                    </DialogHeader>
                    <form action={handleAddProfile} className="flex flex-col gap-2">
                        <Label htmlFor="platform">Platform</Label>
                        <Select name="platform" >
                            <SelectTrigger>
                                <SelectValue placeholder="Select a platform" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Spotify">Spotify</SelectItem>
                                <SelectItem value="YouTube">YouTube</SelectItem>
                                <SelectItem value="Instagram">Instagram</SelectItem>
                                <SelectItem value="Other">Other</SelectItem>
                            </SelectContent>
                        </Select>
                        <Label htmlFor="url">URL</Label>
                        <Input type="text" name="url" placeholder="Enter your url" />
                        <Label htmlFor="followers">Followers</Label>
                        
                        <Button type="submit">Add Profile</Button>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    )
}