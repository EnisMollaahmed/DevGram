import { NavLink } from "react-router";


export default function NavLinkContainer(){
    return(
        <section className='navlink-sect'>
            <NavLink to=':nickname/code'>Code</NavLink>
            <NavLink to=':nickname/memes'>Memes</NavLink>
            <NavLink to=':nickname/about'>About</NavLink>
        </section>
    )
}