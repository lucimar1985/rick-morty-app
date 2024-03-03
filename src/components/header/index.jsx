import { Container } from "./style";
import Logo from '../../assets/logo.svg'

export const Header = () => {
    return (
        <Container>
            <img src={Logo} alt="logo"/>

            <nav>
                <a href="#">Docs</a>
                <a href="#">About</a>
                <a href="#" className="link-btn">Suporte us</a>
            </nav>

        </Container>
    )
}