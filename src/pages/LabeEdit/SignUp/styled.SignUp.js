import styled from "styled-components";
import { Link } from "react-router-dom";
export const GridSignUp = styled.div`
  position: relative;
  z-index: 0;
  top: 0;
  min-height: 50vh;
  height: 100%;
  display: grid;
  width: 1fr;
  background: #e5e5e5;
  grid-template-rows: 80px  auto 1fr;
  margin-bottom: 80px;

  .box1 {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    margin-top: 0px;
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
    width: 243px;
    height: 40px;
    margin: 8px;
  }

  .boxInput {
    width: 100%;
    margin: 18px;
  }

  .button1 {
    display: inline-block;
    width: 365px;
    padding: 13px 33px;
    border-radius: 27px;
    background: linear-gradient(90deg, #ff6489 0%, #f9b24e 100%);
    color: white;
    font-weight: 900;
  }
  .link2 {
    display: inline-block;
    width: 365px;
    background: white;
    text-align: center;
    border: 1px solid #fe7e02;
    color: white;
    border-radius: 27px;
    background: white;
    color: #fe7e02;
    font-weight: 900;
    height: 50px;
    line-height: 38px;
  }

  .hrule {
    display: block;
    max-width: 430px;
    height: 13px;
    margin: 8px;
  }
`;
