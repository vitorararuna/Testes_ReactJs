
import React, {Component, useState} from 'react';
import { Modal, OverlayTrigger, Tooltip, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Coments from './Coments';



export default class Post extends Component {
    constructor(props){
        super(props);

        this.state = {
         comentario: [
             //{text: 'Bom Post Mokirido'}
            ], 
         comentarioNovo: ''
        };
 
        this.handleSubmit = this.handleSubmit.bind(this); /*Referenciando o this no escopo da funcao handleSubmit*/
        this.handleChange = this.handleChange.bind(this); 
    }

    handleSubmit(e){
        this.setState({
            comentario: [...this.state.comentario, {text: this.state.comentarioNovo}]  /*Adicionei no meu primeiro elm do estado um novo comentario que defini no metodo handleTextChange*/
        });

        this.setState({comentarioNovo: ''}); /*Limpando o Input novamente*/

        e.preventDefault(); /*Previnindo o recarregamento da página*/

    }   

    handleChange(e){    //HandleChangeUniversal => basta passar o value={this.state.algum} e o name='algum' no input do formulário

        /*Vamos alterar o estado da nossa aplicação toda vez que haver uma alteração no input, passando o seu valor*/
        var target = e.target;
        var value = target.value;
        var name = target.name;
        this.setState({ [name]: value} );

    }


    render(){
        console.log(this.state.comentarioNovo);
        return(

            <div>
                <h2>{this.props.title}</h2>

                <form onSubmit={this.handleSubmit}>
                    <input 
                        value={this.state.comentarioNovo}
                        name = 'comentarioNovo'
                        onChange={this.handleChange}     /*Funcao que é disparada toda vez que o nosso input for alterado*/
                    />
                    <button type="submit">Comentar</button>
                </form>

                {this.state.comentario.map((comentario, index) =>{
                    return <Coments key={index} text={comentario.text}/>
                })}

            </div>
        );
    }
} 