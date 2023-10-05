import styled from "styled-components";

export const FooterCtn = styled.footer`


    position: fixed; 
    top: 90vh;
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    height: 100%;
    height: 100%;
    background-color: var(--gray-hf);
    color: var(--principal-orange);
    text-align: center;
    align-self: center;
    border-radius: 25px;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    -webkit-border-radius: 25px;
    -moz-border-radius: 25px;
    -ms-border-radius: 25px;
    -o-border-radius: 25px;
    justify-content: space-around;

ul{
    display: flex;
    flex-flow: row wrap;
    align-self: flex-start;
    font-size: 1.81rem;
    justify-content: space-around;
    padding-top: 29px;
}
footer img {
    width: 90px;
    height: 90px;
    margin-top: 40px
}
footer p span {
    color: white;
}

footer p {
    width: 100%;

    padding: 2rem;
    color: brown;
    font-weight: bolder;
    border-radius: 15px;
    box-shadow: 11.4px 1.3px 0.9px rgba(22, 70, 1, 0.73);
}

footer ul li i{
    text-shadow: 2px 2px black;
    margin: auto 1rem;
    ;
}



`