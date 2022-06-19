import styled from 'styled-components'

export const LoginAppContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
  background-color: #202020;
`

export const LgWebsiteImageEl = styled.img`
  height: 372px;
  max-width: 482px;
  @media all and (max-width: 1092px) {
    width: 320px;
    height: 280px;
  }
  @media all and (max-width: 767px) {
    display: none;
  }
`
export const WebsiteLogo = styled.img`
  height: 42px;
  width: 122px;
  @media all and (max-width: 380px) {
    height: 36px;
    width: 98px;
  }
`
export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 408px;
  width: 406px;
  border-radius: 8px;
  background: #2c364c;
  box-shadow: 0px 8px 40px rgba(7, 7, 7, 0.08);
  @media all amd (max-width: 380px) {
    width: 300px;
    height: 540px;
  }
`

export const FormEl = styled.form`
  display: flex;
  flex-direction: column;
`
export const InputLabelContainer = styled.div`
  display: flex;
  height: 74px;
  width: 330px;
  border-radius: 0px;
  flex-direction: column;
  @media all and (max-width: 380px) {
    height: 64px;
    width: 312px;
  }
`

export const LabelEl = styled.label`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  color: #f8fafc;
`

export const InputEl = styled.input`
  height: 40px;
  width: 330px;
  top: 8px;
  border: 1px solid #f8fafc;
  outline: none;
  border-radius: 2px;
  padding: 8px;
  color: #f8fafc;
  background: transparent;
  @media all and (max-width: 380px) {
    height: 40px;
    width: 312px;
  }
`

export const CustomButton = styled.button`
  height: 40px;
  width: 330px;
  margin-top: 20px;
  border-radius: 8px;
  background: #4094ef;
  border: none;
  color: #ffffff;
  cursor: pointer;
  @media all and (max-width: 380px) {
    height: 40px;
    width: 312px;
  }
`
export const InputCheckBoxEl = styled.input`
  height: 15px;
  width: 15px;
`
export const ShowPasswordContainer = styled.div`
  display: flex;
  margin-top: -26px;
  align-items: center;
  @media all and (max-width: 380px) {
    margin-top: -15px;
  }
`
export const Para = styled.p`
  font-size: 14px;
  color: #f8fafc;
  margin-left: 5px;
  font-family: 'Roboto';
`
export const ErrorMsgPara = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: #ef4444;
`
