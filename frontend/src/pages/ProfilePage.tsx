import { User } from "../types/UserType";
import ProfilePhotoName from "../Components/ProfilePhotoName/ProfilePhotoName";
import { Outlet, useOutletContext } from "react-router";
import NavLinkContainer from "../Components/NavLinkContainer/NavLinkContainer";

export default function ProfilePage(){
    const userStr = localStorage.getItem(import.meta.env.VITE_CURR_USER);
    const user: User | null = userStr ? JSON.parse(userStr) : null;

    return (
        <main>
            <ProfilePhotoName imageUrl={user?.imageUrl as string} username={user?.nickname as string}/>
            <NavLinkContainer/>
            <Outlet context={user as User}/>
        </main>
    )
}

export function useUser():User{
    return useOutletContext<User>();
}