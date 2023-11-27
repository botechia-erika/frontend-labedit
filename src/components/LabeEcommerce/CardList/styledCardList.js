import styled from "styled-components"
export const CardsCtn = styled.div`
width: 90%;
height:100%;
padding-top: 2rem;
    list-style-type: none;
    display: flex;
    flex-flow: column wrap;
    width: 240px;
    height: 386px;
    border-radius: 20px;
background: white;
margin: 15px auto;
align-items: center;
justify-content: space-around;
padding-top: 1rem;
    box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;


 img  {
max-height:  120px;
justify-self:center;
align-self: center;
margin: auto;
background: white;
}


 p {
    background: white;
    margin: 10px auto;
}

button{
width: 106px;
height: 44px;
padding: 0px 15px;
justify-content: center;
align-items: center;
gap: 8px;
flex-shrink: 0;
border-radius: 4px;
background: rgba(255, 138, 0, 0.91);
margin-right: 8px;
margin-left: 4px;


h3{
    color:  rgba(255, 138, 0, 0.91);
    padding-top: 2rem;
}
`