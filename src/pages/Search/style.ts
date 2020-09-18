import styled, { css, keyframes } from 'styled-components'

interface FormProps {
  isError?: boolean;
}

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
  animation: ${animaLeft} .5s forwards;
`

export const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`

export const Header = styled.header``


export const Form = styled.form<FormProps>`
  display: flex;
  flex-wrap: wrap;

  input {
    flex: 1;
    height: 72px;
    background: #FFFFFF;
    border: 2px solid #FFF;
    padding: 0 1rem;
    font-size: 2.0rem;
    outline: none;

    ${props => props.isError && css`
        border-color: #cc3838;
    `}
    
    &::placeholder {
      color: #A8A8B3;
    }
  }

  button {
    width: 210px;
    background: #04D361;
    color: #FFF;
    border: none;
    font-size: 1.8rem;
    will-change: color;
    transition: color .2s;

    &:hover {
      background: #14da6d
    }
  }
`

export const Movies = styled.div`
  margin-top: 4rem;
`

export const Movie = styled.div`
  background: #EFEFEF;
  display: flex;
  align-items: flex-start;
  font-size: 1.6rem;

  & + div {
    margin-top: 10px;
  }

  img {
    width: 125px;
  }

  > div {
    margin-left: 15px;
    padding: 10px;
    
    strong {
      display: block;
      margin-bottom: 1.5rem;
    }

    p {
      margin-top: 10px;
      line-height: 2.3rem;
    }

    a {
      margin-top: 1rem;
      display: block;
    }
  }

`

export const ErrorMessage = styled.span`
  display: block;
  color: #cc3838;
  font-size: 1.8rem;
  margin-top: 0.5rem;
`

export const Loading = styled.h3`
  font-size: 1.8rem;
  margin: 2rem 0;
`