import styled from 'styled-components'

export const FixContainer = styled.div`
  max-width: 550px;
  margin: 0 auto;
`
export const Logo = styled.h1`
  font-size: 100px;
  line-height: 100px;
  font-weight: 100;
  color: rgba(175, 47, 47, 0.15);
  text-align: center;
  margin-bottom: 10px;

  @media (max-width: 736px) {
    font-size: 80px;
  }
`

export const MainContainer = styled.div`
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.25);
  background-color: #fff;
  position: relative;
`
export const ToDoList = styled.ul`
  list-style-type: none;
`
