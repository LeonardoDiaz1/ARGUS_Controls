import './App.css'
import { Route, Routes } from 'react-router-dom'
import { NavLink } from './NavLink'
import "bootstrap/dist/css/bootstrap.min.css"
//Componentes Home
import AcooImage from './Components/AcooImage'
import Services from './Components/Services'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
//Componentes Nosotros
import About_Us from './Components/About_Us'
//Componentes Productos
import Products from './Components/Products'

const Home = () => <section>
  <div>
    <AcooImage />
  </div>
  <div>
    <Services />
  </div>
  <div>
    <Contact />
  </div>
  <div>
    <Footer />
  </div>
</section>

const Nosotros = () => <section>
  <div>
    <About_Us />
  </div>
  <div>
    <Footer />
  </div>
</section>

const Productos = () => <section>
  <div>
    <Products />
  </div>
  <div>
    <Footer />
  </div>
</section>
const Alianzas = () => <section></section>

function App() {
  return (
    <div className='App'>
      <header>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <a style={{ color: 'white', marginLeft: '1rem', cursor: 'pointer' }} className='navbar-brand'>ARGUS Controls</a>
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className='nav nav-pills'>
                <li className='nav-item'>
                  <NavLink to='/'>Home</NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink to='/Nosotros'>Nosotros</NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink to='/Productos'>Productos</NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink to='/Alianzas'>Alianzas</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Nosotros' element={<Nosotros />} />
        <Route path='/Productos' element={<Productos />} />
        <Route path='/Alianzas' element={<Alianzas />} />
      </Routes>
    </div>
  )
}

export default App
