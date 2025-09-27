"use client";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { authClient } from "@/lib/auth-client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function UserEdit({ setDialogOpen}: { setDialogOpen: (open: boolean) => void}) {

    // TODO: Add validation and better form handling
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [profession, setProfession] = useState("");
    const [location, setLocation] = useState("");
    const router = useRouter();
    const { 
        data: session, 
        isPending, //loading state
        error, //error object
        refetch //refetch the session
    } = authClient.useSession();
    useEffect(() => {
        setName(session?.user?.name || "");
        setUsername(session?.user?.username || "");
        setProfession(session?.user?.profession || "");
        setLocation(session?.user?.location || "");
    }, [session]);
   
    // if (!isPending) return <div>Loading...</div>;
    
    const handleSubmit = async (formData: FormData) => {
        const name = formData.get("name");
        const username = formData.get("username");
        const profession = formData.get("profession");
        const location = formData.get("location");
        await authClient.updateUser( {
            name: name as string,
            username: username as string,
            profession: profession as string,
            location: location as string
        });

        router.refresh(); 
        setDialogOpen(false);
    }

    return (
        <div>
           <form action={handleSubmit} className="flex flex-col gap-2">
            <Label htmlFor="name">Name</Label>
            <Input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} />
            <Label htmlFor="username">Username</Label>
            <Input type="text" name="username" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <Label htmlFor="profession">Profession</Label>
            <Input type="text" name="profession" id="profession" value={profession} onChange={(e) => setProfession(e.target.value)} />
            <Label htmlFor="location">Location</Label>
            <Input type="text" name="location" id="location" value={location} onChange={(e) => setLocation(e.target.value)} />
            <Button type="submit">Save</Button>
           </form>
        </div>
    )
}