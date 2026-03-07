import type { Dog } from '../types/dog'

interface FavoritesPanelProps {
  favorites: Dog[]
  onSelect: (dog: Dog) => void
  onRemove: (dog: Dog) => void
}

export function Favorites({ favorites, onSelect, onRemove }: FavoritesPanelProps) {
  return (
    <aside className="favorites-panel">
      <h2 className="favorites-panel__title">Favorites</h2>
      {favorites.length === 0 ? (
        <p className="favorites-panel__empty">No favorites yet</p>
      ) : (
        <ul className="favorites-panel__list">
          {favorites.map(dog => (
            <li key={dog.id} className="favorites-panel__item">
              <div 
                className="favorites-panel__dog"
                onClick={() => onSelect(dog)}
              >
                <img 
                  src={dog.image} 
                  alt={dog.breed} 
                  className="favorites-panel__image"
                />
                <span className="favorites-panel__breed">{dog.breed}</span>
              </div>
              <button 
                className="favorites-panel__remove-btn"
                onClick={(e) => {
                  e.stopPropagation()
                  onRemove(dog)
                }}
                aria-label={`Remove ${dog.breed} from favorites`}
              >
                ×
              </button>
            </li>
          ))}
        </ul>
      )}
    </aside>
  )
}
