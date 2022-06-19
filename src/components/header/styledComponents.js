import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const HeaderContEl = styled.div`
  position: fixed;
  z-index: 1;
  top: 0px;
  display: flex;
  align-items: center;
  height: 12vh;
  width: 100vw;
  background-color: #272727;
`

export const NavContEl = styled.nav`
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const WebsiteLogo = styled.img`
  height: 42px;
  width: 122px;
  @media all and (max-width: 576px) {
    height: 35px;
    width: 100px;
  }
`

export const LgNavEl = styled.div`
  display: flex;
  align-items: center;
  @media all and (max-width: 576px) {
    display: none;
  }
`
export const SmNavEl = styled.div`
  display: flex;
  align-items: center;
  display: none;
  padding-top: 10px;
  @media all and (max-width: 576px) {
    display: block;
  }
`

export const LinkEl = styled(Link)`
  margin-right: 12px;
  color: #f1f5f0;
  font-size: 20px;
  text-decoration: none;
  font-family: 'Roboto';
`

export const CustomButton = styled.button`
  height: 33px;
  width: 90px;
  border-radius: 8px;
  background: #4094ef;
  border: none;
  color: #ffffff;
  cursor: pointer;
  @media all and (max-width: 576px) {
    display: none;
  }
`
