import styled from 'styled-components'

export const InputContainer = styled.div`
  position: relative;
`

export const Input = styled.input`
  width: 100%;
  font-size: 24px;
  line-height: 24px;
  color: #4d4d4d;
  padding: 16px 16px 16px 50px;

  &::placeholder {
    opacity: 0.5;
    font-style: italic;
  }

  @media (max-width: 736px) {
    font-size: 21px;
  }
`
