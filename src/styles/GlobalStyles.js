import { createGlobalStyle } from 'styled-components';

const initialConfig = `
    box-sizing: border-box;
    font-size: 10px;
`

const colors = `
    --mainTextColor: #ECEFF1;
    --colorBankKey: #004D40;
    --colorBankAccount: #0277BD;
    --colorOk: #26A69A;
    --colorProblem: #E65100;
    --darkBackground: #263238;
    --componentsBackground: #004D40;
    --colorOrange: #ffa900;
`
const spaces = `
    --mainWidth: 384px;
    --maxWidth: #1000px;
    --componentsPaddings: 35px 5px 15px;
    --componentsMargins: 45px 0px;
`

const fx = `
    --bs: 0 2px 2px 0 rgba(0,0,0,0.99);
    --componentsBorder: 1px solid black;
    --transition: 0.4s ease-out;
    --animation: emerge 0.2s ease-in-out;
`

const typography = `
    --fontSizeSmall: 13px;
`


const GlobalStyles = createGlobalStyle`

html {
    ${initialConfig}
    ${colors}
    ${spaces}
    ${fx}
    ${typography}

    box-sizing: border-box;
    font-size: 10px;
}

*, *:before, *:after {
    box-sizing: inherit;
}

body {
    /* font-family: 'radnika_next', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; */
    font-family: 'Montserrat', sans-serif;
    padding: 0;
    margin: 0;
    font-size: 1.5em;
    line-height: 2;
    background-color: var(--darkBackground);
}

a {
    text-decoration: none;
    color: var(--black);
}
a:hover {
    text-decoration: underline;
}

button {
    font-family: 'radnika_next', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
`;

export default GlobalStyles;
