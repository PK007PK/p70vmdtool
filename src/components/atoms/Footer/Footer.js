import { FooterStyle } from "./Footer.style";
import { BsGithub } from 'react-icons/bs';

export const Footer = () => (
    <FooterStyle>
        <p>
            <a href="https://github.com/PK007PK/p70vmdtool" target="blank">
                <BsGithub /> Code
            </a>
        </p>
        <p>
            <a href="https://krasny.netlify.app/programming/1" target="blank">
                &copy; Piotr Krasny
            </a>
        </p>
    </FooterStyle>
)