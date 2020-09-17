import styled from 'styled-components'

export const Container = styled.header`
  font-size: 2rem;
  padding: 15px 0;

  a {
    color: #333;
    text-decoration: none;
    will-change: color;
    transition: color .2s;

    &:visited {
      color: inherit;
    }
    &:hover {
      color: rgba(0,0,0, .3);
    }
  }
`