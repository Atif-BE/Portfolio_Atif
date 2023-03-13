import { Nav } from "../styles/navbarStyles";


const NavBar = () => {
    const menuItems = ["01 Home", "02 Who", "03 Projects", "04 Contact"];


    return(
        <Nav>
            <img src="./logo_transparent.png" width={200} height={70}></img>
            {menuItems.map((e, index) => <p key={index}>{e}</p>)}
        </Nav>
    )
}

export default NavBar;