import React, { createContext, useContext } from 'react'

interface ApiData {
  key: string,
  urlPoster: string
}

const ApiContext = createContext<ApiData>({} as ApiData)

const ApiProvider: React.FC = ({ children }) => {
  return (
    <ApiContext.Provider value={{
      key: 'e75de3c94fe262846465b1591782336b',
      urlPoster: 'http://image.tmdb.org/t/p/w185'
    }}>
      {children}
    </ApiContext.Provider>
  )
}

function useApi(): ApiData {
  const context = useContext(ApiContext)
  if (!context) throw new Error('useApi must be used within a context')
  return context
}

export { useApi, ApiProvider }