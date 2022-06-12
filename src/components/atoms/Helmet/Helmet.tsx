import { Helmet } from "react-helmet";

export const HelmetComp: React.FunctionComponent = (): JSX.Element => 
    <Helmet>
        <html lang="en" />
        <title>IBAN defender. FVMD tool</title>
        <meta name="description" content="Tool to facilitate manual bank data checks between financial systems and in supporting docs" />
        <meta charSet="utf-8" />
        <link rel="canonical" href="https://iban-defender.netlify.app/" />
    </Helmet>