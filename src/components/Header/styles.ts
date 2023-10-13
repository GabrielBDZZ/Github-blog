import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background-image: linear-gradient(
    ${(props) => props.theme['base-profile']},
    ${(props) => props.theme['base-post']}
  );
  height: 18.5rem;
  display: flex;
  justify-content: space-between;

  img {
    width: 22rem;
  }
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  margin-top: -134px;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 9.25rem;
    cursor: pointer;
  }
`
