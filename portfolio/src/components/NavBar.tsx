import { Nav } from "../shared/navbarStyles";


const NavBar = () => {
    const menuItems = ["Home", "Who", "Projects", "Contact"];


    return(
        <Nav>
            <img src="./logo_transparent.png" width={200} height={70}></img>
            {menuItems.map(e => <p>{e}</p>)}
        </Nav>
    )
}

export default NavBar;