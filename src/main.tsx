import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@tracx/App'
import './index.css'
import "leaflet/dist/leaflet.css"; // <- Leaflet styles

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
