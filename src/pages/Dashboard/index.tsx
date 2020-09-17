import React, { useCallback, useRef, useState, FormEvent, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import { useApi } from '../../hooks/apiContext'
import api from '../../services/api'

import { Header, Form, Container, Title, Subtitle, ErrorMessage } from './style'
import Slide from '../../components/Slide'
import { TrendingProps } from '../../Interfaces/TrendingsProps'
import Genre from '../../components/Genre'

const Dashboard: React.FC = () => {
  const history = useHistory()
  const { key } = useApi()
  const inputSearchMovie = useRef<HTMLInputElement | null>(null)

  const [isError, setIsError] = useState('')
  const [trendings, setTrendings] = useState<TrendingProps[]>([])

  useEffect(() => {
    async function getTrending() {
      const { data } = await api.get(`trending/all/day?api_key=${key}`)
      const results = data.results as TrendingProps[]
      setTrendings(results)
    }
    getTrending()
  }, [key])

  const searchMovie = useCallback(async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const movie = inputSearchMovie.current?.value as string
    try {
      if (movie.length > 0) {
        history.push(`/search?m=${movie}`)
      } else {
        throw new Error('Por favor, preencher com um título')
      }
    } catch (e) {
      setIsError(e.message)
    }
  }, [history])

  return (
    <Container>
      <Header>
        <Title>Home</Title>
        <Form isError={!!isError} onSubmit={searchMovie}>
          <input
            type="text"
            placeholder="Search..."
            ref={inputSearchMovie}
          />
          <button>Search</button>
        </Form>
        {isError && <ErrorMessage>{isError}</ErrorMessage>}
      </Header>

      <Subtitle>Trends</Subtitle>
      {trendings.length > 0 && <Slide slides={trendings} />}

      <Genre title="Action" id={28} />

      <Genre title="Adventure" id={12} />

      <Genre title="Animation" id={16} />

      <Genre title="Drama" id={18} />

    </Container>
  )
}

export default Dashboard  