import { styled } from 'styled-components'

export const PostContent = styled.div`
  width: 416px;
  height: 260px;
  padding: 32px;
  margin: 16px 0;

  border-radius: 10px;
  background: ${(props) => props.theme['base-post']};
  cursor: pointer;

  h1 {
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 160%;
    color: ${(props) => props.theme['base-title']};
  }

  span {
    font-size: 0.875rem;
    line-height: 160%;
    color: ${(props) => props.theme['base-span']};
  }
`
