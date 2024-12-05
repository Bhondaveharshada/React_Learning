import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.jsx'
import { App2 } from './App.jsx'
import { Profile } from './components/Profile.jsx'
//import AdditionOfNumbers from './components/AddOfNumbers.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   {/*  <App /> */}
    <App2/>
   {/*  <AdditionOfNumbers/> */}
   <Profile/>
  </StrictMode>,


)
