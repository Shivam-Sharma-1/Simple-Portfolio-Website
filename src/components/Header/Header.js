import { default as Link } from "next/link";
import { DiCssdeck } from 'react-icons/di'
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai'
import { Container, Div1, Div2, Nav, NavLink, SocialIcons } from "./HeaderStyles";

function Header() {
    return (
        <Container>
            <Div1>
                <Link href='/'>
                    <div style={{textDecoration: "none", color: "white", display: "flex" , alignItems: "center"}}>
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
            <Div2>
                <SocialIcons href="https://github.com">
                    <AiFillGithub size="3rem" />
                </SocialIcons>
                <SocialIcons href="https://linkedin.com">
                    <AiFillLinkedin size="3rem" />
                </SocialIcons>
                <SocialIcons href="https://twitter.com">
                    <AiFillTwitterCircle size="3rem" />
                </SocialIcons>
            </Div2>
        </Container>
    )
}

export default Header