import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import api from '../../services/api'
import { useApi } from '../../hooks/apiContext'

import {
  Container,
  Average
} from './styles'

interface MovieParam {
  id: string
}

interface MovieProps {
  id: number
  genres: [
    {
      id: number,
      name: string
    }
  ],
  original_title: string
  overview: string
  poster_path: string
  release_date: string
  vote_average: number
}

const Movie: React.FC = () => {

  const { id } = useParams<MovieParam>()
  const { key, urlPoster } = useApi()

  const [movie, setMovie] = useState<MovieProps>({} as MovieProps)

  useEffect(() => {
    async function getMovie() {
      const { data } = await api.get(`movie/${id}?api_key=${key}&language=en-US`)
      const results = data as MovieProps
      setMovie(results)
    }
    getMovie()
  }, [id, key])

  if (!movie.id) return null
  else
    return (
      <Container>
        <img src={`${urlPoster}${movie.poster_path}`} alt={movie.original_title} />
        <div>
          <strong>{movie.original_title} | {movie.release_date.replace(/-/g, '/')}</strong>
          <ul>
            {movie.genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
          </ul>
          <Average><b>Average:</b>{movie.vote_average}</Average>
          <p>
            {movie.overview}
          </p>
        </div>
      </Container>
    )
}

export default Movie