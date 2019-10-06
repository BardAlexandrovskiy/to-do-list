import styled from 'styled-components'

export const ToDoItemContainer = styled.li`
  padding: 16px 40px 16px 50px;
  color: ${props =>
    props.check ? 'rgba(77,	77,	77, 0.5)' : 'rgba(77,	77,	77, 1)'};
  font-size: 24px;
  line-height: 28px;
  border-top: 1px solid #e6e6e6;
  word-wrap: break-word;
  position: relative;
  transition: color 0.3s;

  @media (max-width: 736px) {
    font-size: 21px;
  }
`

export const CheckButton = styled.button`
  width: 32px;
  height: 32px;
  line-height: 32px;
  font-size: 24px;
  border-radius: 50%;
  position: absolute;
  border: 1px solid ${props => (props.check ? '#5dc2af' : '#e6e6e6')};
  left: 10px;
  top: 50%;
  cursor: pointer;
  transform: translateY(-50%);
  color: ${props => (props.check ? '#5dc2af' : 'transparent')};
  transition: border 0.3s, color 0.3s;
`
export const DeleteButton = styled.button`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 32px;
  height: 32px;
  line-height: 32px;
  font-size: 24px;
  color: #cc9a9a;
  cursor: pointer;
`
