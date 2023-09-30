import styled from "styled-components";

export const ContainerSignup = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-height: 100vh;
    padding-top: 80px ;
    background: #fea051 ;
`

export const ContainerForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 60vw;
    height:70%;
    padding: 16px;
    margin-top: 5vh;
    min-width: fit-content;
    max-width: 100vw;

    border-radius: 15px;
    margin-bottom: 32px;
    background: whitesmoke ;


    label{
        
    font-size: 16px;
    text-align: center;
    margin-bottom: 1rem;
    }


    input{
        border: 2px solid  gray ;
        border-radius: 11px;
        margin-left: 5px;
        text-align: center;
    }
`

export const Input = styled.input`



`