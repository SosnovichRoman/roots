import Footer from './containers/Footer/Footer'
import Header from './containers/Header/Header'
import Home from './containers/Home/Home';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './common.scss'

function App() {

  return (
    <div className="App wrapper">
      <Header />
      <Routes>
        <Route path="" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
