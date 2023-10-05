import styled from "styled-components";

export const HeaderCtn = styled.header`
position: fixed;
top: 0;

  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  width: 100%;
  z-index:11;
  min-height: 80px;
  background: #434343;
  vertical-align: flex-start;
  margin: auto;
  padding: 0.5rem;
  margin-top: 0px;
  box-shadow: 0px 1.4px 1.6px 0px var(--orange-default);
  border-radius: 0 0 15px 15px;
  box-shadow: 5px 0 10px rgba(0, 0, 0, .6);
   
    top: 0;
    left: 0;
    position: fixed;
    font-weight: bolder;
    font-size: 1.4rem;
    border-left: 4px solid rgb(6, 43, 0);
    border-radius: 15px;
    -webkit-border-radius: 15px;
    -moz-border-radius: 15px;
    -ms-border-radius: 15px;
    -o-border-radius: 15px;

  nav {
    display: flex;
    height: 100%;
    max-height: 60px;
    justify-content: space-around;
    align-content: center;
    background: #434343;
    
  }

  nav Button {
    
    display: flex;
    flex-flow: column wrap;
    max-width: 105px;
    align-self: center;
    margin: 30px 5px;
    text-decoration: none;
    color: black;
    font-weight: 900;
    background: whitesmoke;
  }

  nav a:hover {
    text-decoration: underline;
    color: var(--orange-default);
  }

  .svgHeader{
    background: #706f6f ;
    height: 100% ;
    padding: 0.5rem ;
    border: 2px solid #fa9d7b ;
    border-radius: 35px ;
  }
`;
