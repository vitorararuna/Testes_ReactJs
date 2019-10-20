//React
import React, {Component, useState} from 'react';
//Bootstrap
import { Modal, OverlayTrigger, Tooltip, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
//Meu css
import './App.css'
//Meus componentes
import Post from './Post';
import Coments from './Coments';




//O componente pode ser interpretado como uma função no js, onde os parametros entrada são as PRPOS
//e o retorno são elm em html, que no caso é JSX 

//O state de um componente é realmente o estado do seu componente. Ele é um objeto onde você adiciona
//os estados que você vai precisar usar no seu componente


//Componente Principal que é renderizado em "index.js"
export default class App extends Component {
   
    //construtor
    constructor(props){
        super(props);

        this.state ={
            labelText: '',
        };
    }

    //funções
    setLabelText = (labelText) => {
        this.setState({ labelText });
    }




    //render JSX
    render() {
        return(
            <div className="app">
                <Post title="ReactJs na Kuak"/>                
            </div>
        );

    }
}

