import styled from 'styled-components'

export const JobsAppContainer = styled.div`
  height: auto;
  min-height: 88vh;
  min-width: 100vw;
  background-color: #121212;
  position: relative;
  top: 12vh;
`

export const ResponsiveContainer = styled.div`
  display: flex;
  width: 80%;
  margin: auto;
  padding-top: 20px;
  padding-bottom: 20px;
  @media all and (max-width: 576px) {
    flex-direction: column;
    align-items: center;
  }
`

export const UserAndFiltersContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 14px;
  position: fixed;
  width: 28%;
  max-width: 220px;
  @media all and (max-width: 576px) {
    position: static;
    width: 100%;
    padding-right: 0px;
  }
`

export const JobsListItemCont = styled.div`
  left: 28%;
  position: relative;
  width: 72%;
  display: flex;
  padding-left: 50px;
  flex-direction: column;
  @media all and (max-width: 576px) {
    left: 0px;
    top: 0px;
    width: 100%;
    padding-left: 0px;
  }
`

export const JobsUnorderedList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  top: 39px;
  position: relative;
  list-style-type: none;
  padding-left: 0px;
  @media all and (max-width: 576px) {
    top: 0px;
  }
`

export const RetryButton = styled.div`
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 10px;
  padding: 8px 16px;
  color: #ffffff;
  background-color: #0967d2;
  border: none;
  border-radius: 4px;
  margin-left: 14px;
  cursor: pointer;
  outline: none;
`

export const UserErrorViewContainer = styled.div`
  display: flex;
  height: 220px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const LoaderContainer = styled.div`
  display: flex;
  height: 88vh;
  align-items: center;
  justify-content: center;
`

export const LoaderUserContainer = styled.div`
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const UserContainer = styled.div`
  height: 220px;
`

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 39px;
  border: 1px solid #475569;
  width: 210px;
  background-color: #121212;
  border-radius: 5px;
  position: fixed;
  z-index: 1;
  @media all and (min-width: 768px) {
    width: 280px;
  }
  @media all and (max-width: 576px) {
    position: sticky;
    top: 13vh;
  }
`

export const InputEl = styled.input`
  background-color: transparent;
  padding: 8px;
  width: 180px;
  font-size: 14px;
  color: #f1f5f9;
  outline: none;
  border: 1px solid #475569;
  @media all and (min-width: 768px) {
    width: 260px;
  }
`

export const SearchButton = styled.button`
  background-color: #272727;
  border-left: none;
  cursor: pointer;
  outline: none;
`

export const SearchIcon = styled.img`
  width: 20px;
  height: 20px;
  color: #f1f5f9;
`

export const NoJobsViewCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 84vh;
  @media all and (min-width: 768px) {
    width: 100%;
  }
  @media all and (max-width: 576px) {
    justify-content: flex-start;
    margin-top: 20px;
  }
`

export const NoJobsImg = styled.img`
  width: 200px;
  height: 150px;
  @media all and (min-width: 768px) {
    width: 309px;
    height: 215px;
  }
`

export const NoJobsHeading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 500;
  line-height: 1.3px;
  @media screen and (min-width: 768px) {
    margin-top: 32px;
    font-size: 24px;
  }
`

export const NoJobsDescription = styled.p`
  text-align: center;
  color: #f1f5f9;
  font-family: 'Roboto';
  font-size: 12px;
  width: 90%;
  max-width: 288px;
  line-height: 1.3;
  @media all and (min-width: 768px) {
    margin-top: 12px;
    font-size: 15px;
    width: 60%;
    max-width: 466px;
  }
`
