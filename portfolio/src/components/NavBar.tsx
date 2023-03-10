import { Nav } from "../styles/navbarStyles";


const NavBar = () => {
    const menuItems = ["Home", "Who", "Projects", "Contact"];


    return(
        <Nav>
            {menuItems.map(e => <p>{e}</p>)}
        </Nav>
    )
}

export default NavBar;