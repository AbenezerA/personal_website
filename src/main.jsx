import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./routes/Layout"
import Projects from "./routes/Projects"
import ProjectPage from './routes/ProjectPage'
import Sidebar from './routes/Sidebar'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index={true} element={<App />} />
          <Route index={false} path="/projects" element={<Projects />} />
          <Route index={false} element={<Sidebar />}>
            <Route index={false} path="/projects/:id" element={<ProjectPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
