/* eslint-disable react-hooks/exhaustive-deps */
import {useReducer, useEffect} from 'react'
import cookie from 'js-cookie'
import {useParams, useHistory} from 'react-router-dom'
import {v4} from 'uuid'
import Loader from 'react-loader-spinner'
import {
  BsFillStarFill,
  BsFillBriefcaseFill,
  BsBoxArrowUpRight,
} from 'react-icons/bs'
import {TiLocation} from 'react-icons/ti'
import ErrorView from '../errorView'
import Header from '../header'
import SimilarJob from '../similarJob'
import {
  JobItemAppContainer,
  ResponsiveContainer,
  JobItemContainer,
  HeaderContainer,
  CompanyLogoImage,
  TitleContainer,
  Title,
  RatingContainer,
  Rating,
  MiddleContainer,
  LocationInternshipContainer,
  Location,
  EmploymentType,
  PackagePerAnnum,
  Line,
  DescriptionAndCompanyLinkContainer,
  DescriptionHeading,
  CompanyLinkAnchorElement,
  VisitEl,
  JobDescription,
  LoaderContainer,
} from './styledComponents'
import './index.css'

const apiConstance = {
  initial: 'INITIAL',
  progress: 'PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

const initialState = {
  jobItemDetails: {},
  similarJobs: [],
  apiStatus: apiConstance.initial,
}

const reducer = (state, action) => {
  switch (action.type) {
    case apiConstance.progress:
      return {...state, apiStatus: apiConstance.progress}
    case apiConstance.success:
      return {
        ...state,
        jobItemDetails: action.payload.jobDetails,
        similarJobs: action.payload.similarJobs,
        apiStatus: apiConstance.success,
      }
    case apiConstance.failure:
      return {...state, apiStatus: apiConstance.failure}
    default:
      return state
  }
}

const JobItemDetails = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const {id} = useParams()
  const history = useHistory()
  const {location} = history
  const {pathname} = location
  const fetchJobItemDetails = async () => {
    dispatch({type: apiConstance.progress})
    const fetchUrl = `https://apis.ccbp.in/jobs/${id}`
    const jwtToken = cookie.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(fetchUrl, options)
    const data = await response.json()
    if (response.ok) {
      const jobDetails = {
        companyLogoUrl: data.job_details.company_logo_url,
        companyWebsiteUrl: data.job_details.company_website_url,
        employmentType: data.job_details.employment_type,
        id: data.job_details.id,
        jobDescription: data.job_details.job_description,
        skills: data.job_details.skills.map(eachSkill => ({
          imageUrl: eachSkill.image_url,
          name: eachSkill.name,
        })),
        lifeAtCompany: {
          description: data.job_details.life_at_company.description,
          imageUrl: data.job_details.life_at_company.image_url,
        },
        location: data.job_details.location,
        packagePerAnnum: data.job_details.package_per_annum,
        rating: data.job_details.rating,
      }
      const similarJobs = data.similar_jobs.map(eachJob => ({
        companyLogoUrl: eachJob.company_logo_url,
        employmentType: eachJob.employment_type,
        id: eachJob.id,
        jobDescription: eachJob.job_description,
        location: eachJob.location,
        rating: eachJob.rating,
        title: eachJob.title,
      }))
      dispatch({type: apiConstance.success, payload: {jobDetails, similarJobs}})
    } else {
      dispatch({type: apiConstance.failure})
    }
  }

  useEffect(() => {
    fetchJobItemDetails()
  }, [pathname])

  const renderLoaderView = () => (
    <LoaderContainer>
      <Loader type="ThreeDots" width="50" height="50" testid="loader" />
    </LoaderContainer>
  )

  const renderJobItemDetailsView = () => {
    const {
      companyLogoUrl,
      employmentType,
      jobDescription,
      packagePerAnnum,
      rating,
      title,
      companyWebsiteUrl,
      skills,
      lifeAtCompany,
    } = state.jobItemDetails
    return (
      <>
        <JobItemContainer>
          <HeaderContainer>
            <CompanyLogoImage
              src={companyLogoUrl}
              alt="job details company logo"
            />
            <TitleContainer>
              <Title>{title}</Title>
              <RatingContainer>
                <BsFillStarFill size="20" color="#fbbf24" />
                <Rating>{rating}</Rating>
              </RatingContainer>
            </TitleContainer>
          </HeaderContainer>
          <MiddleContainer>
            <LocationInternshipContainer>
              <TiLocation size="20" color="#ffffff" />
              <Location>{state.jobItemDetails.location}</Location>
              <BsFillBriefcaseFill size="20" color="#ffffff" />
              <EmploymentType>{employmentType}</EmploymentType>
            </LocationInternshipContainer>
            <PackagePerAnnum>{packagePerAnnum}</PackagePerAnnum>
          </MiddleContainer>
          <Line />
          <DescriptionAndCompanyLinkContainer>
            <DescriptionHeading>Description</DescriptionHeading>
            <CompanyLinkAnchorElement href={companyWebsiteUrl}>
              <VisitEl>Visit</VisitEl>
              <BsBoxArrowUpRight size="20" color="#4f46e5" />
            </CompanyLinkAnchorElement>
          </DescriptionAndCompanyLinkContainer>
          <JobDescription>{jobDescription}</JobDescription>
          <h1 className="skills-heading">Skills</h1>
          <ul className="skills-list-container">
            {skills.map(each => (
              <li className="skills-item" key={v4()}>
                <img
                  src={each.imageUrl}
                  alt={each.name}
                  className="skills-image"
                />
                <p className="skills-name">{each.name}</p>
              </li>
            ))}
          </ul>
          <h1 className="life-at-company-heading">Life at Company</h1>
          <div className="life-at-company-content">
            <p className="life-at-company-description">
              {lifeAtCompany.description}
            </p>
            <img
              src={lifeAtCompany.imageUrl}
              alt="life at company"
              className="life-at-company-image"
            />
          </div>
        </JobItemContainer>
        <h1 className="similar-jobs-heading">Similar Jobs</h1>
        <ul className="similar-jobs-list">
          {state.similarJobs.map(each => (
            <SimilarJob key={each.id} similarJobDetails={each} />
          ))}
        </ul>
      </>
    )
  }

  const renderJobItemView = () => {
    switch (state.apiStatus) {
      case apiConstance.progress:
        return renderLoaderView()
      case apiConstance.success:
        return renderJobItemDetailsView()
      case apiConstance.failure:
        return <ErrorView fetchResources={fetchJobItemDetails} />
      default:
        return null
    }
  }

  return (
    <>
      <Header />
      <JobItemAppContainer>
        <ResponsiveContainer>{renderJobItemView()}</ResponsiveContainer>
      </JobItemAppContainer>
    </>
  )
}

export default JobItemDetails
