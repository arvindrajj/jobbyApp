import {
  JobsErrorViewContainer,
  JobsFailureImg,
  JobsFailureHeading,
  JobsFailureDescription,
  RetryButton,
} from './styledComponents'

const ErrorView = props => {
  const {fetchResources} = props
  return (
    <JobsErrorViewContainer>
      <JobsFailureImg
        src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
        alt="failure view"
      />
      <JobsFailureHeading>Oops! Something Went Wrong</JobsFailureHeading>
      <JobsFailureDescription>
        We cannot seem to find the page your are looking for.
      </JobsFailureDescription>
      <RetryButton type="button" onClick={fetchResources}>
        Retry
      </RetryButton>
    </JobsErrorViewContainer>
  )
}

export default ErrorView
