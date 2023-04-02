import React from "react";
import { Table, Button, Form, Modal, Pagination } from "react-bootstrap";

class ListaCliente extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            id:0,
            cliente: '', 
            primerEndereço: '',
            segundoEndreço:'',
           
            clientes: [],
            endereso:[],
            modalAberta: false
        }
    }

    componentDidMount() {
        this.buscarCliente();
    }

    componentWillUnmount() {

    }

    buscarCliente = () => {
        fetch("http://localhost:3000/cliente")
        .then(resposta => resposta.json())
        .then(dados => {
            this.setState({clientes:dados})
        })
    }

    

    renderTabela(){
        return <Table striped bordered hover size="table caption-top bg-white rounded mt-2  sm m-3 px-3  ">
                <thead>
                   <tr> 
                    <th>ID</th>
                    <th>Cliente</th>
                    <th>Primer Endereço</th>
                    <th>Segundo Endereço</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.clientes.map((cliente) =>
                        <tr>
                        <td>{cliente.cliente}</td>
                        <td>{cliente.primerEndereço}</td>
                        <td>{cliente.segundoEndreço}</td>
                       
                    </tr>
                    
                        )
                    }
                    
                    <tr>
          <td>1</td>
          <td>Nita Rocha</td>
          <td>Av Rua Barra 2323, Federacion, Rio de Janeiro</td>
          <td>Rua Rocha 2523, </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob Gonzalez</td>
          <td>Rua Jõa Centenario 50, Rio de Janeiro</td>
          <td>Julio 3 apt 203, Niteroi, Rio de Janeiro</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Larry Machado</td>
          <td>Rua Juan 6633, Rio de Contas, Bahia</td>
          <td>Rua Rocha 5000, Salvador, Bahia</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Larry Machado</td>
          <td>Rua Juan 6633, Rio de Contas, Bahia</td>
          <td>Rua Rocha 5000, Salvador, Bahia</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Larry Machado</td>
          <td>Rua Juan 6633, Rio de Contas, Bahia</td>
          <td>Rua Rocha 5000, Salvador, Bahia</td>
        </tr>
        <tr>
          <td>6</td>
          <td>Larry Machado</td>
          <td>Rua Juan 6633, Rio de Contas, Bahia</td>
          <td>Rua Rocha 5000, Salvador, Bahia</td>
        </tr>
        <tr>
          <td>7</td>
          <td>Larry Machado</td>
          <td>Rua Juan 6633, Rio de Contas, Bahia</td>
          <td>Rua Rocha 5000, Salvador, Bahia</td>
        </tr>
        <tr>
          <td>8</td>
          <td>Larry Machado</td>
          <td>Rua Juan 6633, Rio de Contas, Bahia</td>
          <td>Rua Rocha 5000, Salvador, Bahia</td>
        </tr>

                </tbody>
            </Table>
        
    }

    atualizaNome = (e)=>{
        this.setState(
            {
                cliente:e.target.value
            }
        )
    }

    atualizaCpfoucnpj = (e)=>{
        this.setState(
            {
                primerEndereço:e.target.value
            }
        )
    }

    atualizaCidade= (e)=>{
        this.setState(
            {
                segundoEndreço:e.target.value
            }
        )
    }

    atualizaEstado = (e)=>{
        this.setState(
            {
                estado:e.target.value
            }
        )
    }

    atualizaCEP = (e)=>{
        this.setState(
            {
                cep:e.target.value
            }
        )
    }

    

    

    submit = () => {

        if(this.state.id == 0){
        const cliente = {
            cliente:this.state.cliente,
            primerEndereço:this.state.primerEndereço,
            segundoEndreço:this.state.segundoEndreço,
            estado:this.state.estado,
            cep:this.state.cep,
            pfpj:this.state.pfpj,
        }

        this.cadastraCliente(cliente);
        } else {
        const cliente = {
            id: this.state.id,
            cliente:this.state.cliente,
            primerEndereço:this.state.primerEndereço,
            segundoEndreço:this.state.segundoEndreço,
            estado:this.state.estado,
            cep:this.state.cep,
            pfpj:this.state.pfpj,
        }
            this.atualizarCliente(cliente);
        }
             this.fecharModal();

        }


    reset = () =>{
    this.setState(
        {
            id:0,
            cliente:'',
            primerEndereço:'',
            segundoEndreço:'',
            estado:'',
            cep:'',
            pfpj:''
            }
        ) 
        this.abrirModal();
    }

    fecharModal = () => {
    this.setState(
        {
            modalAberta: false
        }
    )
     }

     abrirModal = () => {
        this.setState(
            {
                modalAberta: true
            }
        )
         }

    render =() => {
        return(
            <div>


                    <Modal show={this.state.modalAberta} onHide={this.fecharModal}>
                    <Modal.Header closeButton>
                    <Modal.Title>Procurar cliente
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Form>
                <Form.Group className="mb-3" >
                    <Form.Label>ID </Form.Label>
                    <Form.Control type="text" value={this.state.id} readOnly={true}/>
                    <Form.Text className="text-muted">
                    </Form.Text>
                    </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Cliente </Form.Label>
                    <Form.Control type="text" placeholder="Nome completo do cliente" value={this.state.cliente} onChange={this.atualizaNome}/>
                    <Form.Text className="text-muted">
                    Digite o Nome completo do cliente
                    </Form.Text>
                </Form.Group>
               
                </Form>

                    </Modal.Body>

                    <Modal.Footer>
                    
                    <Button variant="primary" type="submit" onClick={this.reset}>
                    Procurar
                    </Button>
                    </Modal.Footer>
                </Modal>

                <Button variant="bi bi-search m-3 fs-3 btn btn-light " type="submit" onClick={this.reset}>
                  
                </Button>             
  

                {this.renderTabela()}
            </div>
        )
    }




}

<footer>

  <div>
 

   
  </div>

</footer>

export default ListaCliente;