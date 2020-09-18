import styled, { keyframes } from 'styled-components'

const animaLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`

export const Container = styled.div`
  display: flex;
  animation: ${animaLeft} .5s forwards;

  div {
    margin-left: 1.5rem;
    strong {
      font-size: 2.5rem;
    }

    ul {
      list-style: none;
      display: flex;
      margin: 1rem 0;
      font-size: 1.2rem;
      li {
        & + li {
          margin-left: 10px;
        }
      }
    }
    
    p {
      font-size: 1.6rem;
      line-height: 2.3rem;
    }
  }
  
`

export const Average = styled.span`
  display: block;
  font-size: 1.6rem;
  margin-bottom: 0.5rem;
`