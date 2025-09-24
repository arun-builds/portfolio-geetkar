"use client";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { authClient } from "@/lib/auth-client";
import { useState, useEffect } from "react";

export default function UserEdit() {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const { 
        data: session, 
        isPending, //loading state
        error, //error object
        refetch //refetch the session
    } = authClient.useSession();
    useEffect(() => {
        setName(session?.user?.name || "");
        setUsername(session?.user?.username || "");
    }, [session]);
   
    if (!session) return null;
    
    const handleSubmit = async (formData: FormData) => {
        const name = formData.get("name");
        const username = formData.get("username");
        await authClient.updateUser( {
            name: name as string,
            username: username as string
        });
    }

    return (
        <div>
           <form action={handleSubmit} className="flex flex-col gap-2">
            <Label htmlFor="name">Name</Label>
            <Input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} />
            <Label htmlFor="username">Username</Label>
            <Input type="text" name="username" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <Button type="submit">Save</Button>
           </form>
        </div>
    )
}