import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function UserAvatar({usedIn,src}: {usedIn: string,src: string}) {
    return (
        <Avatar className={`${usedIn == "profile" ? "md:size-24 size-18" : "md:size-10 size-10"}`}>
            <AvatarImage src={src} />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
    )
}