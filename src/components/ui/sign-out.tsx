"use client"
import { signOut } from "@/lib/auth-client";
import { Button } from "./button";
export default function SignOut() {
    return (
        <div>
            <Button onClick={() => signOut()}>SignOut</Button>
        </div>
    )
}