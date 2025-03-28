import { NavLink } from "react-router"
import "./NavBar.css"

export default function NavBar(){
    return (
        <nav className="navbar">
            <NavLink className={({isActive})=> isActive ? 'active' : 'pending'} to='/'>Home</NavLink>
            <NavLink className={({isActive})=> isActive ? 'active' : 'pending'} to='codes'>Codes</NavLink>
            <NavLink className={({isActive})=> isActive ? 'active' : 'pending'} to='memes'>Memes</NavLink>
            <NavLink className={({isActive})=> isActive ? 'active' : 'pending'} to='my-profile'>Profile</NavLink>
        </nav>
    )
}