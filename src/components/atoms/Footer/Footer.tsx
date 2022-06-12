import { FooterStyle } from "./Footer.style";
import { BsGithub } from 'react-icons/bs';

export const Footer: React.FunctionComponent = (): JSX.Element => (
    <FooterStyle>
        <a href="https://github.com/PK007PK/p70vmdtool" target="blank">
            <BsGithub /> Code
        </a>
        <a href="https://krasny.netlify.app/programming/1" target="blank">
            &copy; Piotr Krasny
        </a>
    </FooterStyle>
)