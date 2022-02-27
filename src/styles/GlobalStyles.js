import { createGlobalStyle } from 'styled-components';

const initialConfig = `
    box-sizing: border-box;
    font-size: 10px;
`

const colors = `
    --mainTextColor: #ECEFF1;
    --colorBankKey: #004D40;
    --colorBankAccount: #827717;
    --colorOk: #388E3C;
    --colorProblem: #E65100;
`
const spaces = `
    --mainWidth: 386px;
    --maxWidth: #1000px;
    --componentsPaddings: 5px 5px;
    --componentsMargins: 30px 0px;
`

const fx = `
    --bs: 0 12px 24px 0 rgba(0,0,0,0.99);
    --componentsBorder: 1px solid black;
`

const typography = `

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
    background-color: #455A64;
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
