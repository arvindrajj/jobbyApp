import styled from 'styled-components'

export const JobItemAppContainer = styled.div`
  height: auto;
  position: relative;
  top: 12vh;
  min-height: 88vh;
  min-width: 100vw;
  background-color: #121212;
`

export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: auto;
  padding-top: 20px;
  padding-bottom: 20px;
`

export const JobItemContainer = styled.div`
  background-color: #272727;
  border-radius: 12px;
  width: 100%;
  min-width: 240px;
  display: flex;
  flex-direction: column;
  padding: 15px;
  margin-bottom: 12px;
`

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
`

export const CompanyLogoImage = styled.img`
  width: 45px;
  height: 45px;
  margin-right: 10px;
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.h1`
  color: #ffffff;
  font-size: 21px;
  font-family: 'Roboto';
  font-weight: 500;
  @media all and (max-width: 768px) {
    font-size: 17px;
  }
`

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  padding-top: 0px;
  margin-top: -26px;
`

export const Rating = styled.p`
  padding-top: 0px;
  color: #ffffff;
  font-size: 16px;
  font-family: 'Roboto';
  margin-left: 5px;
  @media all and (max-width: 768px) {
    font-size: 15px;
  }
`

export const MiddleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media all and (max-width: 768px) {
    margin-bottom: 6px;
  }
`

export const LocationInternshipContainer = styled.div`
  display: flex;
  align-items: center;
`

export const Location = styled.p`
  color: #f1f5f9;
  font-size: 16px;
  font-family: 'Roboto';
  margin-left: 5px;
  margin-right: 15px;
  @media all and (max-width: 768px) {
    font-size: 12px;
    margin-right: 8px;
    margin-left: 1px;
  }
`

export const EmploymentType = styled.p`
  color: #f1f5f9;
  font-size: 16px;
  font-family: 'Roboto';
  margin-left: 5px;
  @media all and (max-width: 768px) {
    font-size: 12px;
  }
`

export const PackagePerAnnum = styled.p`
  color: #f1f5f9;
  font-size: 18px;
  font-family: 'Roboto';
  @media all and (max-width: 768px) {
    font-size: 13px;
  }
`

export const Line = styled.hr`
  height: 1px;
  background-color: #b6c5ff;
  color: #b6c5ff;
  width: 100%;
`
export const DescriptionAndCompanyLinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const DescriptionHeading = styled.h1`
  color: #ffffff;
  font-size: 20px;
  font-family: 'Roboto';
  margin-bottom: 0px;
  @media all and (max-width: 768px) {
    font-size: 15px;
    font-weight: 500;
    margin-bottom: -5px;
  }
  @media all and (min-width: 894px) {
    font-size: 22px;
  }
`
export const CompanyLinkAnchorElement = styled.a`
  display: flex;
  align-items: center;
`
export const VisitEl = styled.p`
  color: #4f46e5;
  font-size: 14px;
  font-family: 'Roboto';
  margin-right: 6px;
  @media all and (max-width: 768px) {
    font-size: 12px;
  }
`

export const JobDescription = styled.p`
  color: #f1f5f9;
  font-size: 15px;
  font-family: 'Roboto';
  @media all and (max-width: 768px) {
    font-size: 13px;
  }
`
export const LoaderContainer = styled.div`
  display: flex;
  height: 88vh;
  align-items: center;
  justify-content: center;
`
