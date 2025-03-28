import { NavLink } from "react-router";
import './Header.css'

export default function Header(){
    return(
        <header className="header">
            <h1>DevGram</h1>
            <NavLink className="navigator" to='messages'>DM</NavLink>
        </header>
    );
}