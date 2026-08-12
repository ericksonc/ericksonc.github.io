import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// tokens.css first -- global.css remaps its semantic names onto the dark ramp.
import './styles/tokens.css'
import './styles/global.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
