import ProfileButton from "./ProfileButton";

export default function ProfileButtons() {
    return (
        <div className="grid grid-cols-2 max-md:justify-center gap-4 w-full items-end ">
            <ProfileButton platform="youtube" />
            <ProfileButton platform="spotify" />
            <ProfileButton platform="youtube" />
            <ProfileButton platform="other" />
        </div>
    )
}