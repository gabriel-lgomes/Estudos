import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { CounterContextProvider } from './context/CounterContext.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 2 - Criando provider */}
    <CounterContextProvider>  
     <App />
    </CounterContextProvider>
  </React.StrictMode>,
)
