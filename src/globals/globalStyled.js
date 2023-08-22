import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
box-sizing: border-box;
padding: 0;
margin: 0;
background: var(--light-default);
font-family: 'IBM Plex Sans', sans-serif;
background: #e5e5e5;
:root{
    --light-default: #FFFFFF;
    --principal-orange: #FF8A00;
    --orange-default: rgba(255, 138, 0, 1);}
`;

export default GlobalStyled;
