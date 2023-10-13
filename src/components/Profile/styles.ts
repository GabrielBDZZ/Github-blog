import styled from 'styled-components'

export const ProfileContainer = styled.div`
  width: 54rem;
  border-radius: 10px;

  background: ${(props) => props.theme['base-profile']};

  display: flex;
  margin: 0 auto;
  padding: 32px;

  margin-top: -100px;
  position: relative;
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.5);
`

export const ProfilePic = styled.img`
  height: 9.25rem;
  width: 9.25rem;
  background: black;
  border-radius: 8px;
  margin-left: 8px;
`

export const ProfileAbout = styled.div`
  margin: 0 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const ProfileName = styled.h1`
  font-size: 1.5rem;
  margin: 8px 0;
  color: ${(props) => props.theme['base-title']};
`

export const TitleContainer = styled.div`
  width: 38rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const GithubProfile = styled.a`
  font-size: 0.75rem;
  text-decoration: none;
  color: ${(props) => props.theme.blue};
`

export const ProfileDesc = styled.p`
  color: ${(props) => props.theme['base-text']};
  font-size: 1rem;
  font-weight: 400;
  line-height: 160%;
  margin-bottom: 24px;
`

export const ProfileSocial = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-right: 30px;
  color: ${(props) => props.theme['base-text']};

  :first-child {
    color: ${(props) => props.theme['base-label']};
  }
`
