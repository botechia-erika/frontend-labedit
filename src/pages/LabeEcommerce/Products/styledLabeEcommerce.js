import styled from "styled-components";
export const CtnLabeEcommerce = styled.div`
html {
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  
  :root {
    font-size: 16px;
    --bg-darkSVG:
  }
  
  body {
    display: grid;
    padding: 1rem;
    min-height: 90vh;
    grid-template-cols: 286px, 420px, 748px, 492px, 731px , 843px, 52px;
  }
  
  /* Resets */

  /* Base Style */
  body {
    color: white;
    font-family: "Open Sans", sans-serif;
    font-size: 1.5rem;
  }
  
  header {
    display: flex;
    flex-flow: row wrap;
    padding: 1rem;
    justify-content: space-around;
    font-size: 1.4rem;
  }
  
  .brandLogo {
    border-radius: 50px;
  }
  
  input {
    font-size: 0.7rem;
  }
  
 
  /* Mobile Styles */
  .parent {
    display: grid;
    grid-template-areas:
      "head"
      "left"
      "main"
      "right"
      "foot";
    min-height: 90vh;
  }
  
  .parent>header,
  footer {
    display: flex;
    align-items: center;
  }
  
  header {
    grid-area: head;
  }
  
  .left-side {
    grid-area: left;
  }
  
  main {
    grid-area: main;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
  }

 ul li{
    padding: 0.251rem ;
    padding: 1rem;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  list-style-type: none;
  }
  
  .right-side {
    grid-area: right;
  }
  
  footer {
    grid-area: foot;
  }
  
  /* Tablet styles */
  @media screen and (min-width: 500px) {
    .parent {
      grid-template-columns: 0.5fr 1fr;
      grid-template-rows: 100px 1fr 1fr 100px;
      grid-template-areas:
        "head head"
        "left main"
        "right main"
        "foot foot";
    }
  }
  
  /* laptop and desktop styles */
  @media screen and (min-width: 960px) {
    .parent {
      grid-template-columns: 200px 1fr 200px;
      grid-template-areas:
        "head head head"
        "left main right"
        "left main right"
        "foot foot foot";
    }
  }
`;
