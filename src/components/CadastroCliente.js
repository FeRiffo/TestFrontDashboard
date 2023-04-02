import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Table, Button, Form, Modal} from "react-bootstrap";

class CadastroCliente extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            id:0,
            nome: '', 
            cpfoucnpj: '',
            telefone:'',
            email:'',
            endereço:'',
            pfpj:'',
            clientes: [],
            modalAberta: false
        }
    }

    componentDidMount() {
        this.buscarCliente();
    }

    componentWillUnmount() {

    }

    buscarCliente = () => {
        fetch("https://raw.githubusercontent.com/FeRiffo/proyectonodejscd/master/db/cliente.json")
        .then(resposta => resposta.json())
        .then(dados => {
            this.setState({clientes:dados})
        })
    }

    deletarCliente = (id) =>{
        fetch("https://raw.githubusercontent.com/FeRiffo/proyectonodejscd/master/db/cliente.json" +id, {method:'DELETE'})
        .then(resposta => {
            if(resposta.ok){
                this.buscarCliente();
            }
        } )
           
    }

    carregarDados = (id) =>{
        fetch("https://raw.githubusercontent.com/FeRiffo/proyectonodejscd/master/db/cliente.json" +id, {method:'GET'})
        .then(resposta => resposta.json())
        .then(cliente =>{
            this.setState({
                id:cliente.id,
                nome:cliente.nome,
                cpfoucnpj:cliente.cpfoucnpj,
                telefone:cliente.telefone,
                email:cliente.email,
                endereço:cliente.endereço,
                pfpj:cliente.pfpj,
            })
            this.abrirModal();

        })
    }

    cadastraCliente= (cliente) =>{
        fetch("https://raw.githubusercontent.com/FeRiffo/proyectonodejscd/master/db/cliente.json",{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(cliente)
    })
        .then(resposta =>{
            if(resposta.ok){
                this.buscarCliente();
            }else{
                alert('Não foi possível adicionar o cliente!');
            }
        } )
    }

    atualizarCliente= (cliente) =>{
        fetch("https://raw.githubusercontent.com/FeRiffo/proyectonodejscd/master/db/cliente.json",{
        method:'PUT',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(cliente)
    })
        .then(resposta =>{
            if(resposta.ok){
                this.buscarCliente();
            }else{
                alert('Não foi possível atualizar os dados do cliente!');
            }
        } )
    }


    renderTabela(){
        return <Table striped bordered hover size="table caption-top bg-white rounded mt-2 sm m-1 ">
                <thead>
                   <tr> 
                    <th>Nome</th>
                    <th>CPF ou CNPJ</th>
                    <th>Telefone</th>
                    <th>E-mail</th>
                    <th>Endereço Principal do Cliente</th>
                    <th>Pessoa Física ou Jurídica</th>
                    <th>Opções</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.clientes.map((cliente) =>
                        <tr>
                        <td>{cliente.nome}</td>
                        <td>{cliente.cpfoucnpj}</td>
                        <td>{cliente.telefone}</td>
                        <td>{cliente.email}</td>
                        <td>{cliente.endereço}</td>
                        <td>{cliente.pfpj}</td>
                        <td>
                        <Button variant="success me-2  bi bi-pencil-square" onClick={()=> this.carregarDados(cliente.id)}></Button>
                        <Button variant="danger bi bi-trash3-fill " onClick={()=> this.deletarCliente(cliente.id)}></Button></td>
                    </tr>
                        )
                    }
                    
                
                </tbody>
            </Table>
        
    }

    atualizaNome = (e)=>{
        this.setState(
            {
                nome:e.target.value
            }
        )
    }

    atualizaCpfoucnpj = (e)=>{
        this.setState(
            {
                cpfoucnpj:e.target.value
            }
        )
    }

    atualizaTelefone= (e)=>{
        this.setState(
            {
                telefone:e.target.value
            }
        )
    }

    atualizaEmail = (e)=>{
        this.setState(
            {
                email:e.target.value
            }
        )
    }

    atualizaEndereço = (e)=>{
        this.setState(
            {
                endereço:e.target.value
            }
        )
    }

    atualizaPfpj = (e)=>{
        this.setState(
            {
                pfpj:e.target.value
            }
        )
    }

    

    submit = () => {

        if(this.state.id == 0){
        const cliente = {
            nome:this.state.nome,
            cpfoucnpj:this.state.cpfoucnpj,
            telefone:this.state.telefone,
            email:this.state.email,
            endereço:this.state.endereço,
            pfpj:this.state.pfpj,
        }

        this.cadastraCliente(cliente);
        } else {
        const cliente = {
            id: this.state.id,
            nome:this.state.nome,
            cpfoucnpj:this.state.cpfoucnpj,
            telefone:this.state.telefone,
            email:this.state.email,
            endereço:this.state.endereço,
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
            nome:'',
            cpfoucnpj:'',
            telefone:'',
            email:'',
            endereço:'',
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
                    <Modal.Title>Cadastro do Cliente</Modal.Title>
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
                    <Form.Label>Nome </Form.Label>
                    <Form.Control type="text" placeholder="Digite o Nome completo" value={this.state.nome} onChange={this.atualizaNome}/>
                    <Form.Text className="text-muted">
                    Digite o Nome completo
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>CPF ou CNPJ </Form.Label>
                    <Form.Control type="number" placeholder=" CPF ou CNPJ" value={this.state.cpfoucnpj} onChange={this.atualizaCpfoucnpj}/>
                    <Form.Text className="text-muted">
                
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Telefone </Form.Label>
                    <Form.Control type="number" placeholder=" Telefone" value={this.state.telefone} onChange={this.atualizaTelefone}/>
                    <Form.Text className="text-muted">
                    
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Email </Form.Label>
                    <Form.Control type="email" placeholder=" email"value={this.state.email} onChange={this.atualizaEmail} />
                    <Form.Text className="text-muted">
                    
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Endereço </Form.Label>
                    <Form.Control type="text" placeholder=" Endereço Principal" value={this.state.endereço} onChange={this.atualizaEndereço}/>
                    <Form.Text className="text-muted">
                    
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Pessoa Física ou Jurídica </Form.Label>
                    <Form.Control type="number" placeholder=" Pessoa Física ou Jurídica"value={this.state.pfpj} onChange={this.atualizaPfpj} />
                    <Form.Text className="text-muted">
                    Digite a opção correspondente
                    </Form.Text>
                </Form.Group>
               
                </Form>

                    </Modal.Body>

                    <Modal.Footer>
                    <Button variant="secondary" onClick={this.fecharModal}>
                        Fechar
                    </Button>
                    <Button variant="primary" type="submit" onClick={this.submit}>
                    Salvar
                    </Button>
                    </Modal.Footer>
                </Modal>

                <Button variant=" bi bi-person-plus m-3 fs-3 btn btn-light " type="submit" onClick={this.reset}>
                    
                </Button>             
  

                {this.renderTabela()}
            </div>
        )
    }




}

export default CadastroCliente;