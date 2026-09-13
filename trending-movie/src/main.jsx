import { StrictMode } from 'react'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Movies from './pages/Movies.jsx'
import Series from './pages/Series.jsx'

const router = createBrowserRouter([
  { path: '/',       element: <App /> },
  { path: '/movies', element: <Movies /> },
  { path: '/series', element: <Series /> },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
