import { NavLink } from "react-router";
import "./NavLinkContainer.css"

export default function NavLinkContainer(){
    return(
        <section className='navlink-sect'>
            <NavLink className={({ isActive }) =>isActive? "active" : "pending"} to='codes'>Codes</NavLink>
            <NavLink className={({ isActive }) =>isActive? "active" : "pending"} to='memes'>Memes</NavLink>
            <NavLink className={({ isActive }) =>isActive? "active" : "pending"} to='about'>About</NavLink>
        </section>
    )
}