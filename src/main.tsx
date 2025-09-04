import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Routes, Route } from "react-router-dom";
import './index.css'
import { Home } from './pages/Home/Home.tsx';
import { Detail } from './pages/Detail/Detail.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="job_detail/:id" element={<Detail />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
)
