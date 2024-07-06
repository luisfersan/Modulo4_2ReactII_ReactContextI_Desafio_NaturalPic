import React, { createContext, useState } from 'react'

// Crea el contexto
export const LikesContext = createContext()

// Crea el proveedor del contexto
export const LikesProvider = ({ children }) => {
  const [likedPhotos, setLikedPhotos] = useState([])

  const toggleLike = (photoId) => {
    setLikedPhotos((prevLikes) =>
      prevLikes.includes(photoId)
        ? prevLikes.filter((id) => id !== photoId)
        : [...prevLikes, photoId]
    )
  }

  return (
    <LikesContext.Provider value={{ likedPhotos, toggleLike }}>
      {children}
    </LikesContext.Provider>
  )
}
