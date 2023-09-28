import { styled } from 'styled-components'

export const InputSearch = styled.input`
  display: flex;
  width: 54rem;
  padding: 12px 16px;
  margin: 12px 0;
  align-items: center;
  gap: 8px;
  color: ${(props) => props.theme['base-title']};

  border-radius: 6px;
  border: 1px solid ${(props) => props.theme['base-border']};
  background: ${(props) => props.theme['base-input']};
`
