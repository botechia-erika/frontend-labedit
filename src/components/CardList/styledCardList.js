import styled from "styled-components"
export const CardsCtn = styled.div`
width: 90%;
height:100%;

ul{
    display: flex;
    flex-flow: row wrap;
    width: 90%;
    justify-content: space-around;
    margin-left: 5%;
    
}


ul li {
    list-style-type: none;
    display: flex;
    flex-flow: column wrap;
    width: 240px;
    height: 286px;
    border-radius: 20px;
background: white;
margin: 15px 10px;
align-items: center;
padding-top: 1rem;
    box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
}


ul li img  {
max-height:  120px;
justify-self:center;
align-self: center;
margin: auto;
background: white;
}


ul li h3, ul li p {
    background: white;
    margin: 10px auto;
}
`