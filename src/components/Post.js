
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
        this.handleTextChange = this.handleTextChange.bind(this); 
    }

    handleSubmit(e){
        this.setState({
            comentario: [...this.state.comentario, {text: this.state.comentarioNovo}]  /*Adicionei no meu primeiro elm do estado um novo comentario que defini no metodo handleTextChange*/
        });

        this.setState({comentarioNovo: ''}); /*Limpando o Input novamente*/

        e.preventDefault(); /*Previnindo o recarregamento da página*/

    }   

    handleTextChange(e){
        /*Vamos alterar o estado da nossa aplicação toda vez que haver uma alteração no input, passando o seu valor*/
        this.setState({comentarioNovo: e.target.value});

    }


    render(){
        return(

            <div>
                <h2>{this.props.title}</h2>

                <form onSubmit={this.handleSubmit}>
                    <input 
                        value={this.state.comentarioNovo}
                        onChange={this.handleTextChange}     /*Funcao que é disparada toda vez que o nosso input for alterado*/
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