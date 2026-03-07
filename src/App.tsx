import { useEffect, useState } from 'react'
import './App.css'
import type { Dog } from './types/dog'
import { getMainDog, getAllDogs } from './services/dogApi'
import { MainDog } from './components/MainDog'
import { DogThumbnail } from './components/DogThumbnail'
import { Favorites } from './components/Favorites'
import './styles/global.css'

function App() {
  
  const [ mainDog, setMainDog ] = useState<Dog | null>(null);
  const [ thumbnailDogs, setThumbnailDogs ] = useState<Dog[]>([])
  const [ favorites, setFavorites ] = useState<Dog[]>([])
  const [ loading, setLoading ] = useState(true)
  const [ error, setError ] = useState<string | null>(null)


  // can be use whitin a hook from the fetching to the actions.
  useEffect(() => {
    async function loadDogs() {
      try {
      setLoading(true)
      setError(null)
      const [main, thumbnails] = await Promise.all([
        getMainDog(),
        getAllDogs()
      ])
      console.log(main);
      console.log(thumbnails);
      setMainDog(main)
      setThumbnailDogs(thumbnails)
    } catch (err) {
      console.log(err)
      setError('Failed to load dogs')
    } finally {
      setLoading(false)
    }
    }
    loadDogs();
  }, [])


  const selectDog = (dog: Dog) => {
    setMainDog(dog)
  }

  const addFavorite = (dog: Dog) => {
    setFavorites(prev => {
      const alreadyAdded = prev.some(f => f.id === dog.id)
      if (alreadyAdded) return prev
      return [...prev, dog]
    })
  }

  const removeFavorite =  (dog: Dog) => {
    setFavorites(prev => prev.filter(f => f.id !== dog.id))
  }
  const isFavorite = (dog: Dog) => {
    return favorites.some(f => f.id === dog.id)
  }

  if (loading) {
    return (
      <div className="app">
        <div className="app__main">
          <div className="loading">Loading dogs...</div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="app">
        <div className="app__main">
          <div className="error">Error: {error}</div>
        </div>
      </div>
    )
  }

  return (
    <div className="app">
      <div className="app__main">
        <header className="app__header">
          <h1 className="app__title">Dog Viewer</h1>
        </header>

        <MainDog 
          dog={mainDog} 
          onAddFavorite={addFavorite}
          isFavorite={mainDog ? isFavorite(mainDog) : false}
        />

        <div className="thumbnails">
          {thumbnailDogs.map(dog => (
            <DogThumbnail
              key={dog.id} 
              dog={dog} 
              onClick={selectDog}
            />
          ))}
        </div>
      </div>

      <Favorites
        favorites={favorites}
        onSelect={selectDog}
        onRemove={removeFavorite}
      />
    </div>
  )
}

export default App
