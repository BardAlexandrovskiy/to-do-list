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
  background-color: #fff;

  &::placeholder {
    opacity: 0.5;
    font-style: italic;
  }

  @media (max-width: 736px) {
    font-size: 21px;
  }
`

export const AllCompletedButton = styled.button`
  position: absolute;
  height: 34px;
  width: 34px;
  font-size: 22px;
  transform: rotate(90deg);
  top: calc(50% - 17px);
  left: 10px;
  line-height: 34px;
  color: rgba(77, 77, 77, 0.5);
`
