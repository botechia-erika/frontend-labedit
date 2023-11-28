import styled from 'styled-components'
import banner from './../../../assets/labeBooks/banner.jpg'
export const BannerContainer = styled.div`
  background: url(${banner});

  height: 550px;
  background-position: top right;
  padding: 90px auto;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 0;
  font-size: 4rem;
  color: black;

  .bannerFlex{
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-content: center;
    width: 100%;
    background: none;
    height:100%;
  }

  .bannerFlex__div{
    display: inline-block;
    background: none;
    width: 40%;
    min-width: 300px;
    color: white;
    font-weight: bolder;
    font-size: 3rem;  
    align-self: center;
  }
`