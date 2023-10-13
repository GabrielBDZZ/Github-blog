import { styled } from 'styled-components'
import { NavLink } from 'react-router-dom'

export const NavLinkContent = styled(NavLink)`
  text-decoration: none;

  color: ${(props) => props.theme['base-span']};

  p {
    color: ${(props) => props.theme['base-text']};
  }
`

export const PostContent = styled.div`
  width: 416px;
  height: 260px;
  padding: 32px;
  margin: 16px 0;

  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;

  border-radius: 10px;
  background: ${(props) => props.theme['base-post']};
  cursor: pointer;

  h1 {
    width: 280px;
    margin-bottom: 20px;
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 160%;
    color: ${(props) => props.theme['base-title']};
  }

  span {
    margin-left: 15px;
    width: 60px;
    font-size: 0.875rem;
  }
`

export const TitleContent = styled.div`
  display: flex;
`
