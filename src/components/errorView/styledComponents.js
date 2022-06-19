import styled from 'styled-components'

export const JobsErrorViewContainer = styled.div`
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

export const JobsFailureImg = styled.img`
  width: 250px;
  height: 180px;
  @media screen and (min-width: 768px) {
    width: 359px;
    height: 235px;
  }
`

export const JobsFailureHeading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  line-height: 1.3px;
  @media screen and (min-width: 768px) {
    margin-top: 32px;
    font-size: 22px;
  }
`

export const JobsFailureDescription = styled.div`
  text-align: center;
  color: #f1f5f9;
  font-family: 'Roboto';
  font-size: 11px;
  width: 90%;
  max-width: 288px;
  line-height: 1.3;
  margin-bottom: 8px;
  @media screen and (min-width: 768px) {
    font-size: 14px;
    width: 65%;
    max-width: 466px;
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
