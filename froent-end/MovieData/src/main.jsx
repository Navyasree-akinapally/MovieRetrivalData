import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AddData from './Components/AddData.jsx'
import DisplayData from './Components/DisplayData.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AddData/>
    <DisplayData/>
  </StrictMode>,
)
