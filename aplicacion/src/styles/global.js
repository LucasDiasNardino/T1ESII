import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        width: 100vw;
        height: 100vh;
        font-family: Arial, Helvetica, sans-serif;
        background-color: #EAD0FE;
    }
    `;

export default GlobalStyle;
