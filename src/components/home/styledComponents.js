import styled from 'styled-components'

export const HomeContEl = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/home-lg-bg.png');
  background-size: cover;
  height: 88vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  top: 12vh;
  @media all and (max-width: 576px) {
    background-image: url('https://assets.ccbp.in/frontend/react-js/home-sm-bg.png');
    justify-content: center;
  }
`

export const HeadingEl = styled.h1`
  font-size: 30px;
  color: #ffffff;
  font-family: 'Roboto';
  max-width: 300px;
  @media all and (max-width: 576px) {
    font-size: 22px;
  }
`
export const ContentEl = styled.div`
  width: 80%;
  margin: auto;
`

export const ParaEl = styled.p`
  font-size: 16px;
  max-width: 250px;
  color: #f8fafc;
  font-family: 'Roboto';
  @media all and (max-width: 576px) {
    font-size: 12px;
  }
`
export const CustomButton = styled.button`
  height: 38px;
  width: 98px;
  border-radius: 8px;
  background: #4094ef;
  border: none;
  color: #ffffff;
  cursor: pointer;
`
