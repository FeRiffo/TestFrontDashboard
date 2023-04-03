import React from "react";
import { Table, Button, Form, Modal} from "react-bootstrap";

class CadastroEndereso extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            id:0,
            cliente: '', 
            rua: '', 
            complemento: '',
            cidade:'',
            estado:'',
            cep:'',
            endere: [],
            modalAberta: false
        }
    }

    componentDidMount() {
        this.buscarEndereço();
    }

    componentWillUnmount() {

    }

    buscarEndereço = () => {
        fetch("https://raw.githubusercontent.com/FeRiffo/proyectonodejscd/master/db/endere%C3%A7o.json")
        .then(resposta => resposta.json())
        .then(dados => {
            this.setState({endere:dados})
        })
    }

    deletarEndereço = (id) =>{
        fetch("https://raw.githubusercontent.com/FeRiffo/proyectonodejscd/master/db/endere%C3%A7o.json" +id, {method:'DELETE'})
        .then(resposta => {
            if(resposta.ok){
                this.buscarEndereço();
            }
        } )
           
    }

    carregarDados = (id) =>{
        fetch("https://raw.githubusercontent.com/FeRiffo/proyectonodejscd/master/db/endere%C3%A7o.json" +id, {method:'GET'})
        .then(resposta => resposta.json())
        .then(endereço =>{
            this.setState({
                id:endereço.id,
                rua:endereço.rua,
                complemento:endereço.complemento,
                cidade:endereço.cidade,
                estado:endereço.estado,
                cep:endereço.cep,
                pfpj:endereço.pfpj,
            })
            this.abrirModal();

        })
    }

    cadastraEndereço= (endereço) =>{
        fetch("https://raw.githubusercontent.com/FeRiffo/proyectonodejscd/master/db/endere%C3%A7o.json",{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(endereço)
    })
        .then(resposta =>{
            if(resposta.ok){
                this.buscarEndereço();
            }else{
                alert('Não foi possível adicionar o endereço!');
            }
        } )
    }

    atualizarEndereço= (endereço) =>{
        fetch("https://raw.githubusercontent.com/FeRiffo/proyectonodejscd/master/db/endere%C3%A7o.json",{
        method:'PUT',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(endereço)
    })
        .then(resposta =>{
            if(resposta.ok){
                this.buscarEndereço();
            }else{
                alert('Não foi possível atualizar os dados do endereço!');
            }
        } )
    }


    renderTabela(){
        return <Table striped bordered hover size="table caption-top bg-white rounded mt-2 sm m-1">
                <thead >
                   <tr> 
                    <th>Cliente</th>
                    <th>Rua</th>
                    <th>Complemento</th>
                    <th>Cidade</th>
                    <th>Estado</th>
                    <th>CEP</th>
                 
                    <th>Opções</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.endere.map((endereço) =>
                        <tr>
                        <td>{endereço.cliente}</td>
                        <td>{endereço.rua}</td>
                        <td>{endereço.complemento}</td>
                        <td>{endereço.cidade}</td>
                        <td>{endereço.estado}</td>
                        <td>{endereço.cep}</td>
                       
                        <td>
                        <Button variant="success me-2 bi bi-pencil-square" onClick={()=> this.carregarDados(endereço.id)}></Button>
                        <Button variant="danger bi bi-trash3-fill " onClick={()=> this.deletarEndereço(endereço.id)}></Button></td>
                    </tr>
                        )
                    }
                    
                
                </tbody>
            </Table>
        
    }


    atualizaCliente = (e)=>{
        this.setState(
            {
                rua:e.target.value
            }
        )
    }

    atualizaRua = (e)=>{
        this.setState(
            {
                rua:e.target.value
            }
        )
    }

    atualizaComplemento = (e)=>{
        this.setState(
            {
                complemento:e.target.value
            }
        )
    }

    atualizaCidade= (e)=>{
        this.setState(
            {
                cidade:e.target.value
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
        const endereço = {
            cliente:this.state.cliente,
            rua:this.state.rua,
            complemento:this.state.complemento,
            cidade:this.state.cidade,
            estado:this.state.estado,
            cep:this.state.cep,
            
        }

        this.cadastraEndereço(endereço);
        } else {
        const endereço = {
            id: this.state.id,
            cliente:this.state.cliente,
            rua:this.state.rua,
            complemento:this.state.complemento,
            cidade:this.state.cidade,
            estado:this.state.estado,
            cep:this.state.cep,
           
        }
            this.atualizarEndereço(endereço);
        }
             this.fecharModal();

        }


    reset = () =>{
    this.setState(
        {
            id:0,
            cliente:'',
            rua:'',
            complemento:'',
            cidade:'',
            estado:'',
            cep:'',
            
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
                    <Modal.Title>Cadastro do Endereço Segundario
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
                    <Form.Control type="text" placeholder="Digite o Nome completo do Cliente" value={this.state.cliente} onChange={this.atualizaCliente}/>
                    <Form.Text className="text-muted">
                    Digite o Nome completo do Cliente
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Rua </Form.Label>
                    <Form.Control type="text" placeholder="Digite o Rua completo" value={this.state.rua} onChange={this.atualizaRua}/>
                    <Form.Text className="text-muted">
                    Digite o Rua completo
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Complemento </Form.Label>
                    <Form.Control type="text" placeholder=" Complemento" value={this.state.complemento} onChange={this.atualizaComplemento}/>
                    <Form.Text className="text-muted">
                
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Cidade </Form.Label>
                    <Form.Control type="text" placeholder=" Cidade" value={this.state.cidade} onChange={this.atualizaCidade}/>
                    <Form.Text className="text-muted">
                    
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Estado </Form.Label>
                    <Form.Control type="estado" placeholder=" Estado"value={this.state.estado} onChange={this.atualizaEstado} />
                    <Form.Text className="text-muted">
                    
                    </Form.Text>
                </Form.Group>

              
                <Form.Group className="mb-3" >
                    <Form.Label>CEP </Form.Label>
                    <Form.Control type="number" placeholder=" CEP "value={this.state.cep} onChange={this.atualizaCEP} />
                    <Form.Text >
                    
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

                <Button variant="bi bi-house-add-fill fs-3 m-3 btn btn-light" type="submit" onClick={this.reset}>
                   
                </Button>             
  

                {this.renderTabela()}
            </div>
        )
    }




}

export default CadastroEndereso;