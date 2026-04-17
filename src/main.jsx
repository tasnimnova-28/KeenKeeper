import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { TimelineProvider } from './context/TimelineContext'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <TimelineProvider>
        <App />
        <Toaster position="top-right" />
      </TimelineProvider>
    </BrowserRouter>
  </StrictMode>,
)