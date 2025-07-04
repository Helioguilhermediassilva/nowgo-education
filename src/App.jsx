import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Programa from './pages/Programa'
import Admissao from './pages/Admissao'
import Localizacao from './pages/Localizacao'
import Eventos from './pages/Eventos'
import Recursos from './pages/Recursos'
import Insights from './pages/Insights'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/programa" element={<Programa />} />
          <Route path="/admissao" element={<Admissao />} />
          <Route path="/localizacao" element={<Localizacao />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/recursos" element={<Recursos />} />
          <Route path="/insights" element={<Insights />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App

