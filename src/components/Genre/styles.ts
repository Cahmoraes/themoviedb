import styled from 'styled-components'

export const Container = styled.div`
  margin-bottom: 2.5rem;
`

export const Movies = styled.ul`
  list-style: none;
  display: flex;
  
  & > li + li {
    margin-left: 1rem;
  }

  img {
    max-width: 100%;
    display: block;
  }
`

export const Subtitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`