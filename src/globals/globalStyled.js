import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
box-sizing: border-box;
padding: 0;
margin: 0;
font-family: 'IBM Plex Sans', sans-serif;
:root{
    --light-default: #FFFFFF;
    --principal-orange: #FF8A00;
    --orange-default: rgba(255, 138, 0, 1);
    --orange-rose: #FF6A51;
    --gray-hf: #434343;

}
`;

export default GlobalStyled;
