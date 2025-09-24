import ProfileButton from "./ProfileButton";
import { Button } from "./ui/button";
import { useEditMode } from "@/contexts/EditModeContext";

export default function AllProfileButtons(){
    const { isEditMode, toggleEditMode } = useEditMode();
    return(
        < div className={`grid grid-cols-2 max-md:justify-center gap-4 w-full items-end }`}>
            <Button className={`${!isEditMode?"hidden":""}`}>Add</Button>
            <ProfileButton platform="youtube" />
            <ProfileButton platform="spotify" />
            <ProfileButton platform="youtube" />
            <ProfileButton platform="youtube" />
        </div>
    )
}