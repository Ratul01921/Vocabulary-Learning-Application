import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/router.jsx'
import Provider from './Provider/Provider.jsx'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider>

    <ToastContainer />
    <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
