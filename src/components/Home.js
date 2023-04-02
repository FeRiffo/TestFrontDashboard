import React from 'react';
import Nav from './Nav';

function Home({Toggle}) {
  return (
    <div className='px-3'>
      <Nav Toggle={Toggle}/>
      <div className='container-fluid'>
        <div className='row g-3 my-2'> 
           
        <div className='col-md-3 p-1'>
                <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                   <h3 className='fs-2'>230</h3>
                   <p className='fs-5'>Produtos</p> 
                   <i className='bi bi-cart-plus p-3 fs-1 '></i>
                </div>
               
            </div>
            <div className='col-md-3 p-1'>
                <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                   <h3 className='fs-2'>2586</h3>
                   <p className='fs-5'>Venda</p> 
                   <i className='bi bi-bar-chart-line p-3 fs-1 '></i>
                </div>
               
            </div>
            <div className='col-md-3 p-1'>
                <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                   <h3 className='fs-2'>3540</h3>
                   <p className='fs-5'>Delivery</p> 
                   <i className='bi bi-truck p-3 fs-1 '></i>
                </div>
               
            </div>
            <div className='col-md-3 p-1'>
                <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                   <h3 className='fs-2'>50%</h3>
                   <p className='fs-5'>Crescimento</p> 
                   <i className='bi bi-graph-up-arrow p-3 fs-1'></i>
                </div>
               
            </div>
        </div>
      </div>
    </div>
    
  )
}

export default Home
