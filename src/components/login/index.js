import {Component} from 'react'
import cookie from 'js-cookie'
import {Redirect} from 'react-router-dom'
import {
  LoginAppContainer,
  LgWebsiteImageEl,
  WebsiteLogo,
  LoginContainer,
  FormEl,
  InputLabelContainer,
  LabelEl,
  InputEl,
  CustomButton,
  InputCheckBoxEl,
  ShowPasswordContainer,
  Para,
  ErrorMsgPara,
} from './styledComponents'

export default class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showErrMsg: false,
    errorMsg: '',
    showPassword: false,
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const url = 'https://apis.ccbp.in/login'
    const body = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(body),
    }
    const res = await fetch(url, options)
    const data = await res.json()
    if (res.ok) {
      const jwtToken = data.jwt_token
      cookie.set('jwt_token', jwtToken)
      const {history} = this.props
      history.replace('/')
    } else {
      this.setState({showErrMsg: true, errorMsg: data.error_msg})
    }
  }

  toggleShowPassword = () => {
    this.setState(prevState => ({
      showPassword: !prevState.showPassword,
    }))
  }

  onChangeUsername = e => this.setState({username: e.target.value})

  onChangePassword = e => this.setState({password: e.target.value})

  render() {
    const {showPassword, showErrMsg, username, password, errorMsg} = this.state
    const jwtToken = cookie.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <LoginAppContainer>
        <LgWebsiteImageEl src="https://img.freepik.com/free-vector/app-development-concept-illustration_114360-5164.jpg?t=st=1654517678~exp=1654518278~hmac=7c1a56e9ac0eeb5441c3c3fae34e12a43bf4fa7d2df9326f5711d72545c4d462&w=740" />
        <LoginContainer>
          <WebsiteLogo
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
          />
          <FormEl>
            <InputLabelContainer>
              <LabelEl htmlFor="username">USERNAME</LabelEl>
              <InputEl
                type="text"
                id="username"
                placeholder="Username"
                value={username}
                onChange={this.onChangeUsername}
              />
            </InputLabelContainer>
            <InputLabelContainer>
              <LabelEl htmlFor="password">PASSWORD</LabelEl>
              <InputEl
                type={showPassword ? 'text' : 'password'}
                id="password"
                placeholder="Password"
                value={password}
                onChange={this.onChangePassword}
              />
            </InputLabelContainer>
            <ShowPasswordContainer>
              <InputCheckBoxEl
                type="checkbox"
                checked={showPassword}
                onChange={this.toggleShowPassword}
              />
              <Para>Show Password</Para>
            </ShowPasswordContainer>
            <CustomButton type="submit" onClick={this.onSubmitForm}>
              Login
            </CustomButton>
            {showErrMsg && <ErrorMsgPara>{errorMsg}</ErrorMsgPara>}
          </FormEl>
        </LoginContainer>
      </LoginAppContainer>
    )
  }
}
