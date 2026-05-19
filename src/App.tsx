import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import DiPiu from './pages/DiPiu'
import Social from './pages/Social'
import IdeeFuture from './pages/IdeeFuture'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="di-piu" element={<DiPiu />} />
          <Route path="social" element={<Social />} />
          <Route path="idee-future" element={<IdeeFuture />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
