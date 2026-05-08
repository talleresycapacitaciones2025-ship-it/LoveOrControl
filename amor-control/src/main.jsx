import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'  // ← Importa AmorOControlApp como default
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />  // ← Renderiza AmorOControlApp
  </React.StrictMode>,
)
