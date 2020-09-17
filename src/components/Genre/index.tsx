import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { useApi } from '../../hooks/apiContext'
import api from '../../services/api'

import {
  Movies,
  Subtitle,
  Container
} from './styles'

interface MovieProps {
  id: number
  popularity: number
  poster_path: string
  original_title: string
  vote_average: number
  overview: string
  title: string
}

interface GenreProps {
  title: string
  id: number
}

const Genre: React.FC<GenreProps> = ({ title, id }) => {

  const { key, urlPoster } = useApi()

  const [reponseMovies, setResponseMovies] = useState<MovieProps[]>([])

  useEffect(() => {
    async function getMovieByGenre() {
      const { data } = await api.get(`discover/movie?api_key=${key}&with_genres=${id}&language=en-US`)
      const results = data.results.slice(0, 5) as MovieProps[]
      setResponseMovies(results)
    }

    getMovieByGenre()
  }, [id, key])

  return (
    <Container>
      <Subtitle>{title}</Subtitle>
      <Movies>
        {
          reponseMovies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movie/${movie.id}`} title={movie.title}>
                <img src={`${urlPoster}${movie.poster_path}`} alt={movie.original_title} />
              </Link>
            </li>
          ))
        }
      </Movies>
    </Container>
  )
}

export default Genre