import UserAvatar from "@/components/UserAvatar";
export default function UserProfile() {
    return (
        <div className="flex items-center max-md:justify-center gap-4 w-full">
            <UserAvatar  />
            <div className="flex flex-col gap-1">
                <div className="flex items-center justify-center gap-2">
                <h1 className="text-2xl font-bold">John Doe</h1>
                <h4 className="text-sm text-gray-500">@john_doe</h4>
                </div>
                <div>
                <p className="text-sm text-gray-100">Music Producer</p>
                <p className="text-sm text-gray-100">Mumbai, India</p>
                </div>
            </div>
        </div>
    )
}