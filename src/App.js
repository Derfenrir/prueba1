import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './Componentes/Navegacion/Navbar'
import Footer from './Componentes/Navegacion/Footer';
import Biblioteca from './Componentes/Paginas/Biblioteca'
import Inicio from './Componentes/Paginas/Inicio'
import Iniciar from './Componentes/Paginas/Iniciar'
import Registrar from './Componentes/Paginas/Registrar'
import Mostrar from './Componentes/Paginas/Mostrar';
import Rlibro from './Componentes/Paginas/Rlibro';

import Naruto from './Componentes/Libros/Naruto';

function App() {
  return (
    <div className="App">
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/biblioteca' element={<Biblioteca/>}/>
        <Route path='/iniciar' element={<Iniciar/>}/>
        <Route path='/registrar' element={<Registrar/>}/>
        <Route path='/mostrar' element={<Mostrar/>}/>
        <Route path='/rlibro' element={<Rlibro/>}/>
        <Route path='/naruto' element={<Naruto/>}/>
      </Routes>
      <Footer/>
    </Router>
    </div>
  );
}

export default App;
