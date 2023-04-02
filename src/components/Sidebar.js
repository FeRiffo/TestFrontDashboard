import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import {BrowserRouter,Routes,Link,Route} from 'react-router-dom';


function Sidebar() {
  return (
    <div className='sidebar d-flex flex-column justify-content-between vh-100'>
      <div className=' bg-white sidebar p-2'>
        <div className='m-2'>
            <i className='bi bi-boostrsp-fill me-3 fs-4'></i>
            <span className='brand-name fs-5'>SCDC</span>
        </div>
      <hr className='text-dark'/>
      <div>
      <ul className=' nalist-group list-group-flush'>
        <Link  className='d-flex alingn-item-center list-group-item py-2'>
            <i className='bi bi-house fs-5 me-3'></i>
            <span >HOME</span>
        </Link>
        <Link to ='/CadastroCliente' className='list-group-item py-2'>
            <i className='bi bi-person-plus-fill fs-5 me-3'></i>
            <span >CLIENTES</span>
        </Link>
        <Link to ='/CadastroEndereso' className='list-group-item py-2'>
            <i className='bi bi-house-add-fill fs-5 me-3'></i>
            <span >ENDEREÇO</span>
        </Link>
        <Link to ='/ListaCliente' className='list-group-item py-2'>
            <i className='bi bi-person-lines-fill fs-5 me-3'></i>
            <span >LISTA</span>
        </Link>
        <a className='list-group-item py-2'>
            <i className='bi bi-power fs-5 me-3'></i>
            <span >Logout</span>
        </a>
        
      </ul>
      </div>
      <footer className='text-secondary'>
         <i className='bi bi-person'></i>
         <span>By Fernanda Riffo</span>
          </footer>
    </div>
    </div>
   
  )
}

export default Sidebar




