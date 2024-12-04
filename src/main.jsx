import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Router from './Components/Router/Router.jsx'
import AuthProvider from './Components/AuthProvider/AuthProvider.jsx';
import { RouterProvider } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider routes={<RouterProvider router={Router} />}></AuthProvider>
    
    
  </StrictMode>,
)
