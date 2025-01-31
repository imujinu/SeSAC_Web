import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'Danjo-bold-Regular';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2307-1@1.1/Danjo-bold-Regular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

html{
font-size: 20px;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Danjo-bold-Regular';
}

a{
    text-decoration: none
}

ul, ol{
    list-style: none;
}
`;
