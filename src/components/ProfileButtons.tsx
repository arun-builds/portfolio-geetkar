"use client";
import { Pencil, Plus } from "lucide-react";
import ProfileButton from "./ProfileButton";
import { useEditMode } from "@/contexts/EditModeContext";
import { DialogTitle, Dialog, DialogTrigger, DialogContent, DialogHeader, DialogDescription } from "./ui/dialog";
import { ReactElement, useEffect, useState } from "react";
import AllProfileButtons from "./AllProfileButtons";
import { Button } from "./ui/button";
import { ProfileLink } from "@/generated/prisma";
import AddProfileLink from "./AddProfileLink";
import {useParams} from "next/navigation";



export default function ProfileButtons() {
    const { isEditMode, toggleEditMode } = useEditMode();
    const [profileLinks, setProfileLinks] = useState<ProfileLink[]>([]);
    const params = useParams<{ username: string }>()




    useEffect(() => {
        const fetchProfileLinks = async () => {
            try {
                const response = await fetch(`/api/getProfileLinks?username=${params.username}`);
                const data = await response.json();
                if(data){
                    setProfileLinks(data.profileLinks);
                }
            } catch (error) {
                console.error(error);
            }

        }
        fetchProfileLinks();
    }, []);

    
    const handleDeleteProfile = async (id: number) => {
        try {
           
            setProfileLinks(profileLinks.filter((profileLink) => profileLink.id !== id));
        }
        catch (error) {
            console.error(error);
        }
    }


    return (
        < div className={`grid grid-cols-2 max-md:justify-center  gap-4 items-end ${isEditMode ? "bg-zinc-800 p-4 rounded-xl border " : ""}`}>


            {profileLinks
                .slice(0, 3)
                .map((profileLink) => (
                    <div key={profileLink.id}>

                        <ProfileButton id={profileLink.id} platform={profileLink.platform} url={profileLink.url} handleDeleteProfile={handleDeleteProfile} />
                    </div>
                ))}

            {profileLinks.length < 4 && isEditMode && (
                <div className={`${profileLinks.length < 1 ? "col-span-2"  : ""}`}>
                <AddProfileLink setProfileLinks={setProfileLinks} profileLinks={profileLinks} />
                </div>
            )}
            {/* <ProfileButton platform="youtube" />
            <ProfileButton platform="spotify" />
            <ProfileButton platform="youtube" /> */}

            {profileLinks.length > 3 && (
                <Dialog>
                    <DialogTrigger>
                        <div className="bg-zinc-800 text-gray-100 p-1 border hover:bg-zinc-800/80 transition-all  w-full flex items-center justify-center gap-2 rounded-md hover:cursor-pointer ">

                            <h3 className="text-md flex items-center gap-4">
                                More...
                            </h3>

                        </div>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogTitle>Add Profile</DialogTitle>
                        <AllProfileButtons profileLinks={profileLinks} setProfileLinks={setProfileLinks} handleDeleteProfile={handleDeleteProfile} />
                    </DialogContent>
                </Dialog>
            )}
        </div>
    )
}

