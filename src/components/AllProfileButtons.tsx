import AddProfileLink from "./AddProfileLink";
import ProfileButton from "./ProfileButton";
import { ProfileLink } from "@/generated/prisma";

export default function AllProfileButtons({profileLinks,setProfileLinks}: {profileLinks: ProfileLink[],setProfileLinks: (profileLinks: ProfileLink[]) => void}){
    return(
        < div className={`grid grid-cols-2 max-md:justify-center gap-4 w-full items-end }`}>
            <AddProfileLink setProfileLinks={setProfileLinks} profileLinks={profileLinks} />
            {profileLinks.map((profileLink) => (
                <ProfileButton key={profileLink.id} id={profileLink.id} platform={profileLink.platform} url={profileLink.url} handleDeleteProfile={() => {}} />
            ))}
            
        </div>
    )
}