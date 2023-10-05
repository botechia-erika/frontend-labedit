import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
box-sizing: border-box;
padding: 0;
margin: 0;
color: var(--text-default);
font-family: 'IBM Plex Sans', sans-serif;
:root{
    --light-default: #FFFFFF;
    --principal-orange: orangered;
    --orange-light: #FF6347;
    --orange-default: #fe8300;
    --orange-rose: #FF6A51;
    --gray-hf: #434343;
    --color-white: white;
    --text-default: #232312;

}


`;

export default GlobalStyled;
