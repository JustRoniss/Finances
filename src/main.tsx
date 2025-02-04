import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Authentication from "./pages/Authentication.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Authentication/> } />
      </Routes>
    </BrowserRouter>

  </StrictMode>
)
