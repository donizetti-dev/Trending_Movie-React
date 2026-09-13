import { StrictMode } from 'react'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Movies from './pages/Movies.jsx'
import Series from './pages/Series.jsx'
import Detail from './pages/Detail.jsx'

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: '/',           element: <Home /> },
      { path: '/movies',     element: <Movies /> },
      { path: '/series',     element: <Series /> },
      { path: '/movies/:id', element: <Detail mediaType="movie" /> },
      { path: '/series/:id', element: <Detail mediaType="series" /> },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
