import React from 'react';
import Nav from './Nav';

function Home({Toggle}) {
  return (
    <div className='px-3'>
      <Nav Toggle={Toggle}/>
      <div className='container-fluid'>
        <div className='row g-3 my-2'> 
           
        <div className='col-md-3 p-1'>
                <div className='p-3 bg-danger shadow-sm d-flex justify-content-around align-items-center rounded'>
                   <h3 className='fs-2 text-white'>3562</h3>
                   <p className='fs-5 text-white'>Produtos</p> 
                   <i className='bi bi-cart-plus text-white p-3 fs-1 '></i>
                </div>
               
            </div>
            <div className='col-md-3 p-1'>
                <div className='p-3 bg-warning shadow-sm d-flex justify-content-around align-items-center rounded'>
                   <h3 className='fs-2 text-white'>2586</h3>
                   <p className='fs-5 text-white'>Venda</p> 
                   <i className='bi bi-bar-chart-line p-3 fs-1 text-white '></i>
                </div>
               
            </div>
            <div className='col-md-3 p-1'>
                <div className='p-3 bg-success shadow-sm d-flex justify-content-around align-items-center rounded'>
                   <h3 className='fs-2 text-white'>3540</h3>
                   <p className='fs-5 text-white'>Delivery</p> 
                   <i className='bi bi-truck text-white p-3 fs-1 '></i>
                </div>
               
            </div>
            <div className='col-md-3 p-1'>
                <div className='p-3 bg-primary shadow-sm d-flex justify-content-around align-items-center rounded'>
                   <h3 className='fs-2 text-white'>50%</h3>
                   <p className='fs-5 text-white'>Crescimento</p> 
                   <i className='bi bi-graph-up-arrow text-white p-3 fs-1'></i>
                </div>
               
            </div>
        </div>
      </div>
    </div>
    
  )
}

export default Home
