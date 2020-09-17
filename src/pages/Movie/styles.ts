import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  
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