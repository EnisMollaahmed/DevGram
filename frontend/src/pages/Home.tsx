import { Outlet } from "react-router";
import Header from "../Components/Header/Header";
import NavBar from "../Components/NavBar/NavBar";


export default function Home(){
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