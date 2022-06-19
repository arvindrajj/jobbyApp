import cookie from 'js-cookie'
import {withRouter} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {BsFillBriefcaseFill, BsBoxArrowRight} from 'react-icons/bs'
import {
  HeaderContEl,
  NavContEl,
  WebsiteLogo,
  LgNavEl,
  SmNavEl,
  LinkEl,
  CustomButton,
} from './styledComponents'

const Header = props => {
  const {history} = props
  const onLogoutUser = () => {
    cookie.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <HeaderContEl>
      <NavContEl>
        <WebsiteLogo
          src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
          alt="website logo"
        />
        <LgNavEl>
          <LinkEl to="/">Home</LinkEl>
          <LinkEl to="/jobs">Jobs</LinkEl>
        </LgNavEl>
        <SmNavEl>
          <LinkEl to="/">
            <AiFillHome height="20" width="20" />
          </LinkEl>
          <LinkEl to="/jobs">
            <BsFillBriefcaseFill height="20" width="20" />
          </LinkEl>
          <LinkEl onClick={onLogoutUser}>
            <BsBoxArrowRight height="20" width="20" />
          </LinkEl>
        </SmNavEl>
        <CustomButton onClick={onLogoutUser}>Logout</CustomButton>
      </NavContEl>
    </HeaderContEl>
  )
}

export default withRouter(Header)
