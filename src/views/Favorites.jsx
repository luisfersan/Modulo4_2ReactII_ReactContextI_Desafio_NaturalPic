import React, { useContext, useEffect, useState } from 'react'
import { LikesContext } from '../context/LikesContext'
import IconHeart from '../components/IconHeart'

const Favorites = () => {
  const { likedPhotos } = useContext(LikesContext)
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    fetch('/public/photos.json')
      .then((response) => response.json())
      .then((data) => setPhotos(data.photos))
  }, [])

  const favoritePhotos = photos.filter((photo) =>
    likedPhotos.includes(photo.id)
  )

  return (
    <div>
      <div className="p-3 gallery grid-columns-4">
        {favoritePhotos.map((photo) => (
          <div
            key={photo.id}
            className="photo-card"
          >
            <div className="image-container">
              <img
                src={photo.src.medium}
                alt={photo.alt}
                className="fixed-size-img"
              />
              <button className="heart-button">
                <IconHeart filled />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Favorites
