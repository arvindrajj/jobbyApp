/* eslint-disable react-hooks/exhaustive-deps */
import {useState, useEffect, useReducer} from 'react'
import cookie from 'js-cookie'
import {AiOutlineSearch} from 'react-icons/ai'
import Loader from 'react-loader-spinner'
import Header from '../header'
import UserProfile from '../userProfile'
import JobItem from '../jobItem'
import FilterGroup from '../filterGroup'
import ErrorView from '../errorView'

import {
  JobsAppContainer,
  ResponsiveContainer,
  UserAndFiltersContainer,
  JobsListItemCont,
  JobsUnorderedList,
  RetryButton,
  UserErrorViewContainer,
  LoaderContainer,
  LoaderUserContainer,
  UserContainer,
  SearchContainer,
  InputEl,
  SearchButton,
  NoJobsViewCont,
  NoJobsImg,
  NoJobsHeading,
  NoJobsDescription,
} from './styledComponents'

const apiConstance = {
  initial: 'INITIAL',
  progress: 'PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

const initialState = {
  jobs: [],
  jobsApiStatus: apiConstance.initial,
  profile: {},
  profileApiStatus: apiConstance.initial,
}

const jobsReducer = (state, action) => {
  switch (action.type) {
    case apiConstance.progress:
      return {...state, jobsApiStatus: apiConstance.progress}
    case apiConstance.success:
      return {
        ...state,
        jobs: action.payload,
        jobsApiStatus: apiConstance.success,
      }
    case apiConstance.failure:
      return {...state, jobsApiStatus: apiConstance.failure}
    default:
      return state
  }
}

const profileReducer = (state, action) => {
  switch (action.type) {
    case apiConstance.progress:
      return {...state, profileApiStatus: apiConstance.progress}
    case apiConstance.success:
      return {
        ...state,
        profile: action.payload,
        profileApiStatus: apiConstance.success,
      }
    case apiConstance.failure:
      return {...state, profileApiStatus: apiConstance.failure}
    default:
      return state
  }
}

const Jobs = () => {
  const [searchInput, setSearchInput] = useState('')
  const [typeOfEmployList, setTypeOfEmployList] = useState([])
  const [salaryRange, setSalaryRange] = useState('')
  const [jobsState, jobsDispatch] = useReducer(jobsReducer, initialState)
  const [profileState, profileDispatch] = useReducer(
    profileReducer,
    initialState,
  )
  const jwtToken = cookie.get('jwt_token')
  const fetchProfile = async () => {
    profileDispatch({type: apiConstance.progress})
    const url = 'https://apis.ccbp.in/profile'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      const userDetails = {
        name: data.profile_details.name,
        profileImageUrl: data.profile_details.profile_image_url,
        shortBio: data.profile_details.short_bio,
      }
      profileDispatch({type: apiConstance.success, payload: userDetails})
    } else {
      profileDispatch({type: apiConstance.failure})
    }
  }
  const fetchJobs = async () => {
    jobsDispatch({type: apiConstance.progress})
    const typeOfEmploy = typeOfEmployList.join(',')
    const url = `https://apis.ccbp.in/jobs?employment_type=${typeOfEmploy}&minimum_package=${salaryRange}&search=${searchInput}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      const postDetails = data.jobs.map(each => ({
        companyLogoUrl: each.company_logo_url,
        employmentType: each.employment_type,
        id: each.id,
        jobDescription: each.job_description,
        location: each.location,
        packagePerAnnum: each.package_per_annum,
        rating: each.rating,
        title: each.title,
      }))
      jobsDispatch({type: apiConstance.success, payload: postDetails})
    } else {
      jobsDispatch({type: apiConstance.failure})
    }
  }

  useEffect(() => {
    fetchProfile()
  }, [])

  useEffect(() => {
    fetchJobs()
  }, [searchInput, typeOfEmployList, salaryRange])

  const renderLoadingView = () => (
    <LoaderContainer>
      <Loader type="ThreeDots" width="50" height="50" testid="loader" />
    </LoaderContainer>
  )

  const renderUserLoadingView = () => (
    <LoaderUserContainer>
      <Loader type="ThreeDots" width="50" height="50" testid="loader" />
    </LoaderUserContainer>
  )

  const renderJobsView = () => (
    <JobsUnorderedList>
      {jobsState.jobs.length > 0 ? (
        jobsState.jobs.map(each => (
          <JobItem jobItemDetails={each} key={each.id} />
        ))
      ) : (
        <NoJobsViewCont>
          <NoJobsImg
            src="https://assets.ccbp.in/frontend/react-js/no-jobs-img.png"
            alt="no jobs"
          />
          <NoJobsHeading>No Jobs Found</NoJobsHeading>
          <NoJobsDescription>
            We could not find any jobs, Try other filters.
          </NoJobsDescription>
        </NoJobsViewCont>
      )}
    </JobsUnorderedList>
  )

  const renderProfileFailureView = () => (
    <UserErrorViewContainer>
      <RetryButton type="button" onClick={fetchProfile}>
        Retry
      </RetryButton>
    </UserErrorViewContainer>
  )

  const RenderAllJobs = () => {
    switch (jobsState.jobsApiStatus) {
      case apiConstance.progress:
        return renderLoadingView()
      case apiConstance.success:
        return renderJobsView()
      case apiConstance.failure:
        return <ErrorView fetchResources={fetchJobs} />
      default:
        return null
    }
  }

  const RenderUserProfile = () => {
    switch (profileState.profileApiStatus) {
      case apiConstance.progress:
        return renderUserLoadingView()
      case apiConstance.success:
        return <UserProfile userDetails={profileState.profile} />
      case apiConstance.failure:
        return renderProfileFailureView()
      default:
        return null
    }
  }

  return (
    <>
      <Header />
      <JobsAppContainer>
        <ResponsiveContainer>
          <UserAndFiltersContainer>
            <UserContainer>{RenderUserProfile()}</UserContainer>
            <FilterGroup
              setTypeOfEmployList={setTypeOfEmployList}
              typeOfEmployList={typeOfEmployList}
              setSalaryRange={setSalaryRange}
            />
          </UserAndFiltersContainer>
          <JobsListItemCont>
            <SearchContainer>
              <InputEl
                type="search"
                value={searchInput}
                onChange={e => setSearchInput(e.target.value)}
              />
              <SearchButton
                type="button"
                onClick={() => setSearchInput(searchInput)}
              >
                <AiOutlineSearch color="#f1f5f9" height="20" width="20" />
              </SearchButton>
            </SearchContainer>
            {RenderAllJobs()}
          </JobsListItemCont>
        </ResponsiveContainer>
      </JobsAppContainer>
    </>
  )
}

export default Jobs
