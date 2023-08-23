import styled from "styled-components";

export const HeaderCtn = styled.header`
position: fixed;
top: 0;

  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  width: 100%;
  z-indez:11;
  min-height: 80px;
  background: #434343;
  vertical-align: flex-start;
  margin: auto;
  padding: 0.5rem;
  margin-top: 0px;
  box-shadow: 0px 1.4px 1.6px 0px var(--orange-default);
  border-radius: 0 0 15px 15px;
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
`;
