import styled from "styled-components"
export const CardsCtn = styled.div`
width: 90%;
height:100%;


h3{
   color: rgba(255, 138, 0, 0.91);
   font-weight: 900;
   font-size: 1rem;
}


    list-style-type: none;
    display: flex;
    flex-flow: column wrap;
    width: 250px;
    height: 386px;
    border-radius: 20px;
background: white;
margin: 15px 10px;
align-items: center;
justify-content: center;
padding: 1rem;

    padding: 1rem;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.60);
 img  {
    box-shadow: 0 2px 2px rgba(0,0,0,.15);
    border-radius: 8px;
    background: whitesmoke;
}
:hover{
 background: #FFEED2 !important;
}
 p {
    background: white;
    margin: 10px auto;
}

button{
width: 86px;
height: 44px;

justify-content: center;
align-items: center;
gap: 8px;
flex-shrink: 0;
border-radius: 4px;
background: rgba(255, 138, 0, 0.91);
margin-right: 8px;
margin-left: 4px;


`