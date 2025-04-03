import { User } from "../types/UserType";
import ProfilePhotoName from "../Components/ProfilePhotoName/ProfilePhotoName";
import { Outlet } from "react-router";
import NavLinkContainer from "../Components/NavLinkContainer/NavLinkContainer";
import { useState } from "react";

export default function ProfilePage(){
    const userStr = localStorage.getItem(import.meta.env.VITE_CURR_USER);
    const user: User | null = userStr ? JSON.parse(userStr) : null;
    const [userInfo, setUserInfo] = useState<User | null>(user);

    return (
        <main>
            <ProfilePhotoName imageUrl={userInfo?.imageUrl as string} username={userInfo?.nickname as string}/>
            <NavLinkContainer/>
            <Outlet context={[userInfo as User, setUserInfo]}/>{/*TODO finnish it, add my codes, my memes, bio and current position*/}
        </main>
    )
}