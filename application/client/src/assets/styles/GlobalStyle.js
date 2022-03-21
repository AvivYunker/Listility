import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: 0;
    }

    body {
        background-color: #27ae60;
    }
`;

export default GlobalStyle;