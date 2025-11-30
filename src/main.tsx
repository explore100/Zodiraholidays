import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import Component from './Component'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
 <App/>
 <Component/>
  </StrictMode>,
)
