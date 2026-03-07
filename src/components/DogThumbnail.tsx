import type { Dog } from '../types/dog'

interface DogThumbnailProps {
  dog: Dog
  onClick: (dog: Dog) => void
}

export function DogThumbnail({ dog, onClick }: DogThumbnailProps) {
  return (
    <div className="thumbnail" onClick={() => onClick(dog)}>
      <div className="thumbnail__image-container">
        <img 
          src={dog.image} 
          alt={dog.breed} 
          className="thumbnail__image"
        />
      </div>
      <p className="thumbnail__breed">{dog.breed}</p>
    </div>
  )
}
