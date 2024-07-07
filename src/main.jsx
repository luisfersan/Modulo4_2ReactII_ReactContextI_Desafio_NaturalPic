import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

import { LikesProvider } from './context/LikesContext.jsx' // Importa el LikesProvider

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LikesProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </LikesProvider>
  </React.StrictMode>
)
