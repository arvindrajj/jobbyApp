import {withRouter} from 'react-router-dom'
import Header from '../header'

import {
  HomeContEl,
  HeadingEl,
  ParaEl,
  CustomButton,
  ContentEl,
} from './styledComponents'

const Home = props => {
  const {history} = props

  return (
    <>
      <Header />
      <HomeContEl>
        <ContentEl>
          <HeadingEl>Find The Jobs That Fits Your Life</HeadingEl>
          <ParaEl>
            Millions of people are searching for jobs, salary information,
            company reviews, Find the job that fits your abilities and
            potential.
          </ParaEl>
          <CustomButton
            onClick={() => {
              history.replace('/jobs')
            }}
          >
            Find Jobs
          </CustomButton>
        </ContentEl>
      </HomeContEl>
    </>
  )
}

export default withRouter(Home)
