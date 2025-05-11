import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import { routers } from './pages/Routers/Routers.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={routers}></RouterProvider>
  </StrictMode>,
)
