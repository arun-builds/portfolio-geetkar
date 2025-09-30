"use client";
import { Button } from "./ui/button";
import { Pencil, Settings2 } from "lucide-react";
import UserAvatar from "./UserAvatar";
import { useEditMode } from "@/contexts/EditModeContext";
import{authClient} from "@/lib/auth-client";
import {useParams} from "next/navigation";
export default function AppHeader({userImage}: {userImage: string}) {
   const{data: session,
    isPending,
    error,
    refetch
   } = authClient.useSession();
   
  const params = useParams<{ username: string }>()


 
   
    const { isEditMode, toggleEditMode } = useEditMode();

    const handleOnClick = () => {
        if(params.username == session?.user?.username){
            toggleEditMode();
        }
    }

    return (
        <div className="border mx-auto bg-zinc-800 rounded-xl md:p-2 p-1 px-4 md:px-6 w-full flex justify-between items-center">
            <h1 className="text-3xl font-semibold font-mono text-yellow-400 tracking-tighter">Geetkar</h1>
            <div className="flex items-center justify-center gap-4 text-sm">
                <div onClick={handleOnClick } className={`${isEditMode?"text-yellow-400":""} flex items-center gap-2 bg-transparent  text-gray-100  hover:text-yellow-400 p-0 hover:cursor-pointer transition-colors`}><Pencil size={20} /><span className="max-md:hidden">Edit Mode</span></div>
                <span className="flex items-center gap-2 hover:text-yellow-400 hover:cursor-pointer transition-colors"><Settings2 size={24} />Settings</span>
                <UserAvatar usedIn="appHeader" src={userImage} />
            </div>
        </div>
    )
}