import styled from 'styled-components'

export const CardItemContainer = styled.li`

  width: 280px;
  list-style-type: none;
  display: inline-block;
  margin: 30px auto;

 .header {
  background-color:  #F0F0F0;
  border-radius: 10px 10px 0px 0px;
  padding: 1rem;

}
img {
  width: 180px;
  border-radius: 50%;
  position: relative;
  bottom: -10px;
  margin: auto;
  background: orange;
  padding: 1rem;
}

.footer {
  display: flex;
  flex-flow: row wrap;
  flex-flow: space-around;
  align-items: center;
  background: #FFFFFF;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.08);
  border-radius: 0px 0px 10px 10px;
  padding-top: 10px;
  padding-bottom: 40px;
}

 h4 {
  color: orangered;
  font-size: 18px;
  line-height: 22px;
  font-weight: bold;
  margin: 8px auto;
}

button{
  display: inline-block;
  width: 40%;
  height: 42px;

  font-size: 1rem;
  color: #333;
  margin: 10px auto;
  letter-spacing: .1rem;
  border: none;
  border-radius: 22px;
  outline: none;
  background: linear-gradient(to right, gold, goldenrod);
  cursor: pointer;
  animation: anim 1s 1s backwards;
  font-size: 20px;
  padding-top: 7px;
  padding-right: -1.5px;
  text-align: center;
  color: black;
}
a{
  display: inline-block;
  width: 42px;
  height: 42px;

  font-size: 1rem;
  color: #333;
  margin: 10px auto;
  letter-spacing: .1rem;
  border: none;
  border-radius: 50%;
  outline: none;
  background: linear-gradient(to right, gold, goldenrod);
  cursor: pointer;
  animation: anim 1s 1s backwards;
  font-size: 20px;
  padding-top: 7px;
  padding-right: -1.5px;
  text-align: center;
  color: black;
}
a:hover , button:hover{
  background: orangered;
  color: white;
}
.buttonsBox{
  width: 100%;
  display: flex; 
  flex-flow: row wrap;
}

`