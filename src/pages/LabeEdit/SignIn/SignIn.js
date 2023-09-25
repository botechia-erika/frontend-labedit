import { Image } from '@chakra-ui/react'
import icon3Club from './../../../assets/icons/icon3Club.png'
import { GridHome } from './styledSigIn'
export function SignIn() {
  return (
    <div>
    <GridHome>
    <div></div>
    <div>
      <div className="box1">
        <Image src={icon3Club} alt="logo OrangeCar" width={'75px'}/>
        <h2>CAR.<strong>Club</strong></h2>
        <p>O Club de quem <strong>AMA CARROS!</strong></p>
        <div className="boxInput">
          <input type="text"  name="inputNickname" id="inputNickname" placeholder='username'/>
          <input type="password" name="inputPassword"  id="inputPassword" placeholder='senha'/>
        </div>
        <div className="boxButton">
          <button className="button1">CONTINUAR</button>
          <button className="button1">CADASTRAR</button>
        </div>
      </div>
    </div>
    <div></div>
  </GridHome>
    </div>
  )
}
