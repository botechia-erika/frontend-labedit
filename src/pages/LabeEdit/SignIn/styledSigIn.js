import styled from "styled-components";
import { Link } from "react-router-dom";
export const GridHome = styled.div`
  max-height: 95vh;
  display: grid;
  width: 100%;
  background: #e5e5e5;
  grid-template-rows: 20px  auto 1fr;
  grid-template-cols: 1fr;
  padding-bottom: 80px;
  
text-align: center;
  .box1 {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    padding-top: 10px;
  }
  .box1 h2 {
    display: block;
    width: 100%;
    font-size: 36px;
    color: #373737;
    font-weight: 700;
  }

  input {
    border-radius: 20px;
    border: 2px solid #ECECEC;
    background: #FFF;
    width: 250px;
    height: 40px;
    margin: 8px;
  }

  .boxInput {
    width: 100%;
    margin: 18px;
  }

  .button1 {
    display: inline-block;
    width: 200px;
    padding: auto;
    border-radius: 27px;
    background: orangered;
    color: white;
    font-weight: 900;
    height: 50px;
    line-height: 38px;
    margin-left: 20px;
    margin-bottom: 20px;
  }


  .button1:hover{
    background: white;
    color: orangered;
    border: 2px solid orangered;
  }
  input {
    text-align: center;
  }
`;
