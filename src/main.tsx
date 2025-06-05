import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { DataHabitProvider } from './context/dataHabitContext.tsx'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DataHabitProvider>
    <App />
    </DataHabitProvider>
  </StrictMode>,
)
