import type { Dog } from '../types/dog'

interface MainDogProps {
  dog: Dog | null
  onAddFavorite: (dog: Dog) => void
  isFavorite: boolean
}

export function MainDog({ dog, onAddFavorite, isFavorite }: MainDogProps) {
  if (!dog) {
    return (
      <div className="main-dog main-dog--empty">
        <p>No dog selected</p>
      </div>
    )
  }

  return (
    <div className="main-dog">
      <div className="main-dog__image-container">
        <img 
          src={dog.image} 
          alt={dog.breed} 
          className="main-dog__image"
        />
      </div>
      <div className="main-dog__info">
        <h2 className="main-dog__breed">{dog.breed}</h2>
        <button 
          className={`main-dog__favorite-btn ${isFavorite ? 'main-dog__favorite-btn--active' : ''}`}
          onClick={() => onAddFavorite(dog)}
          disabled={isFavorite}
        >
          {isFavorite ? '♥ Favorited' : '♡ Add to Favorites'}
        </button>
      </div>
    </div>
  )
}
