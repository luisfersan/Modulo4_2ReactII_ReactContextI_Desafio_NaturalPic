import React, { useEffect, useState, useContext } from 'react'
import { LikesContext } from '../context/LikesContext'
import IconHeart from './IconHeart'

const Gallery = () => {
  const [photos, setPhotos] = useState([])
  const { likedPhotos, toggleLike } = useContext(LikesContext)

  useEffect(() => {
    fetch('/public/photos.json')
      .then((response) => response.json())
      .then((data) => setPhotos(data.photos))
  }, [])

  return (
    <div className="gallery grid-columns-5 p-3">
      {photos.map((photo) => (
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
            <button
              className="heart-button"
              onClick={() => toggleLike(photo.id)}
            >
              <IconHeart filled={likedPhotos.includes(photo.id)} />
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Gallery
