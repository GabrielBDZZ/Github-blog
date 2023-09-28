import { styled } from 'styled-components'

export const PublicationsContent = styled.div`
  display: grid;
  justify-content: center;

  margin: 4.5rem 0;
`
export const TitleContent = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Title = styled.h1`
  font-size: 1.125rem;
`

export const Pubs = styled.span`
  color: ${(props) => props.theme['base-span']};
  font-size: 0.875rem;
  line-height: 160%;
`
