import styled from 'styled-components'

export const PostContainer = styled.div`
  height: 13.25rem;
  width: 54rem;
  border-radius: 10px;

  background: ${(props) => props.theme['base-profile']};

  margin: 0 auto;
  padding: 32px;

  margin-top: -100px;
  position: relative;
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.5);

  div {
    display: flex;
    justify-content: space-between;

    a {
      text-decoration: none;
      color: ${(props) => props.theme.blue};
      font-size: 0.75rem;
    }
  }
`

export const PostTitle = styled.h1`
  font-size: 1.5rem;
  margin: 20px 0;
  color: ${(props) => props.theme['base-title']};
`

export const PostData = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-right: 30px;
  color: ${(props) => props.theme['base-text']};

  :first-child {
    color: ${(props) => props.theme['base-label']};
  }
`

export const PostTextContent = styled.div`
  width: 54rem;

  margin: 0 auto;
  padding: 32px;
`
