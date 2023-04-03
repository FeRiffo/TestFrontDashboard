import Home from './components/Home';
import CadastroCliente from './components/CadastroCliente';
import CadastroEndereso from './components/CadastroEndereso';
import ListaCliente from './components/ListaCliente';
import {BrowserRouter,Routes,Link,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Sidebar from './components/Sidebar';
import { useState } from 'react';



function App() {
  const[toggle, setToggle] = useState(true)
  const Toggle = () => {
    setToggle(!toggle)
  }
  return (
    <div className=" d-flex container-fluid bg-dark min-vh-100 ">
<BrowserRouter>
    { toggle && <div className='col-2 col-md-2 bg-white position-fixed '>
     <Sidebar/>
     </div>}
     { toggle && <div className='col-2 col-md-2'></div>}
                <div className='col'>
                  <Home Toggle={Toggle} />
                  <Routes>
                  <Route path='/CadastroCliente' index element={<CadastroCliente />}></Route>
                  <Route path='/CadastroEndereso' index element={<CadastroEndereso />}></Route>
                  <Route path='/ListaCliente' index element={<ListaCliente />}></Route>
                  </Routes>
     
     </div>
     </BrowserRouter>
     
     </div>
    
  );
}

export default App;
