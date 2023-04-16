import { default as Link } from "next/link";
import { DiCssdeck } from 'react-icons/di'
import { Container, Div1, Nav, NavLink } from "./HeaderStyles";

function Header() {
    return (
        <Container>
            <Div1>
                <Link href='/'>
                    <div>
                        <DiCssdeck/><span>Portfolio</span>
                    </div>
                </Link>
            </Div1>
            <Nav>
                <li>
                    <Link href='#projects'>
                        <NavLink>Projects</NavLink>
                    </Link>
                </li>
                <li>
                    <Link href='#tech'>
                        <NavLink>Technology</NavLink>
                    </Link>
                </li>
                <li>
                    <Link href='#about'>
                        <NavLink>About</NavLink>
                    </Link>
                </li>
            </Nav>
        </Container>
    )
}

export default Header