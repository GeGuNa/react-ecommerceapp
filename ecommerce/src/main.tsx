import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './assets/main.css'
import App from './App.tsx'
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, useTheme } from './context/Context'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <ThemeProvider>
  	<BrowserRouter>
    	<App />
  	</BrowserRouter>
  	</ThemeProvider>
  </StrictMode>,
)
