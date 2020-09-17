import React, { useEffect, useState, FormEvent, useCallback, useRef } from 'react'
import { Link, useLocation, useHistory } from 'react-router-dom'

import { useApi } from '../../hooks/apiContext'
import api from '../../services/api';

import { Container, Title, Header, Form, Movies, Movie, ErrorMessage } from './style'

interface MovieProps {
  id: number
  popularity: number
  poster_path: string
  original_title: string
  vote_average: number
  overview: string
  release_date: string
}

const Search: React.FC = () => {
  const { key, urlPoster } = useApi()
  const location = useLocation()
  const history = useHistory()

  const [isError, setIsError] = useState('')
  const [responseMovies, setResponseMovies] = useState<MovieProps[]>([])
  const inputSearchMovie = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    async function getMovies() {
      setIsError('')
      try {
        const search = new URLSearchParams(location.search)
        if (search.has('m') === true) {
          const querySearch = search.get('m') as string
          console.log(querySearch)
          if (querySearch?.length > 0) {
            const { data } = await api.get(`search/movie?api_key=${key}&query=${querySearch}`)
            const results = data.results as MovieProps[]
            console.log(results)
            setResponseMovies(results)
          } else {
            throw new Error('Por favor, preencher com um título')
          }
        }
      } catch (e) {
        setIsError(e.message)
      } finally {
        inputSearchMovie!.current!.value = ''
      }
    }
    getMovies()
  }, [key, location.search])

  const getMovie = useCallback(async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      const movie = inputSearchMovie.current?.value as string
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
        <Title>Search</Title>
        <Form isError={!!isError} onSubmit={getMovie}>
          <input
            type="text"
            placeholder="Search..."
            ref={inputSearchMovie}
          />
          <button>Search</button>
        </Form>

        {isError && <ErrorMessage>{isError}</ErrorMessage>}

      </Header>
      <Movies>
        {
          responseMovies.map(movie => (
            <Movie key={movie.id}>

              <img src={`${urlPoster}${movie.poster_path}`} alt={movie.original_title} />
              <div>
                <strong>{movie.original_title} | {movie.release_date.replace(/-/g, '/')}</strong>
                <span>Popularidade: {movie.popularity}</span>
                <p>{movie.overview}</p>
                <Link to={`/movie/${movie.id}`}>More informations</Link>
              </div>
            </Movie>
          ))
        }
      </Movies>
    </Container>
  )
}

export default Search