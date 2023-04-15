import { default as Link } from "next/link";
import { DiCssdeck } from 'react-icons/di'

function Header() {
    return (
        <>
            <div>
                <Link href='/'>
                    <div>
                        <DiCssdeck/><span>Portfolio</span>
                    </div>
                </Link>
            </div>
            <nav>
                <li>
                    <Link href='#projects'>
                        <p>Projects</p>
                    </Link>
                </li>
                <li>
                    <Link href='#tech'>
                        <p>Technology</p>
                    </Link>
                </li>
                <li>
                    <Link href='#about'>
                        <p>About</p>
                    </Link>
                </li>
            </nav>
        </>
    )
}

export default Header