import { styled } from 'styled-components'

export const PublicationsContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 4.5rem 0;
`

export const PostsContent = styled.div`
  width: 54rem;

  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`

export const TitleContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 54rem;
`

export const Title = styled.h1`
  font-size: 1.125rem;
`

export const Pubs = styled.span`
  color: ${(props) => props.theme['base-span']};
  font-size: 0.875rem;
  line-height: 160%;
`
