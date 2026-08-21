import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom' // <-- Indispensable
import App from './App.jsx'
import ProjectDetail from './pages/ProjectDetail.jsx'
import Parcours from './pages/Parcours.jsx'
import CodeChallenge from './pages/CodeChallenge.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/projet/:id" element={<ProjectDetail />} />
        <Route path="/parcours" element={<Parcours />} />
        <Route path="/challenge" element={<CodeChallenge />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)