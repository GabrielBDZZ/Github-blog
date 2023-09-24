import styled from 'styled-components'

export const ProfileContainer = styled.div`
  height: 13.25rem;
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
`

export const ProfileName = styled.h1`
  font-size: 1.5rem;
  margin: 8px 0;
  color: ${(props) => props.theme['base-title']};
`

export const ProfileDesc = styled.p`
  color: ${(props) => props.theme['base-text']};
  font-size: 1rem;
  font-weight: 400;
  line-height: 160%;
  margin-bottom: 24px;
`

export const ProfileSocial = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  margin-right: 30px;
  text-decoration: none;
  color: ${(props) => props.theme['base-text']};

  :first-child {
    color: ${(props) => props.theme['base-label']};
  }
`
