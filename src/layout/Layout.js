import Header from '../components/Header/Header'
import { Container } from './LayoutStyles'

function Layout({children}) {
    return (
        <Container>
            <Header/>
            <main>
                {children}
            </main> 
        </Container>
    )
}

export default Layout