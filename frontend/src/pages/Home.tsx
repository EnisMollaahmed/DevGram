import { Outlet } from "react-router";
import Header from "../Components/Header/Header";
import NavBar from "../Components/NavBar/NavBar";
import { User } from "../types/UserType";

const mockUser:User = {
    id: "31",
    imageUrl: "https://example.com/users/john_doe.jpg",
    name: "John Doe",
    nickname: "johndoe88",
    email: "john.doe@example.com",
    developerLevel: "senior",
    idOfDislikedNews: ["3", "14", "26"],
    idOfLikedNews: ["1", "5", "16", "24"],
    idOfPostedMemes: ["101", "102"],
    idOfPostedCodes: ["201"],
    idOfCommentsOfCodes: ["301"],
    idOfCommentsOfMemes: ["401"]
  }

export default function Home(){
    localStorage.setItem(import.meta.env.VITE_CURR_USER, JSON.stringify(mockUser))// set user
    return (
        <>
            <Header/>
            <NavBar/>
            <main className="content">
                <Outlet/>
            </main>
        </>
    )
}