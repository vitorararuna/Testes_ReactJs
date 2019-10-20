//React
import React, {Component, useState} from 'react';
//Bootstrap
import { Modal, OverlayTrigger, Tooltip, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
//Meu css
import './App.css'




//O componente pode ser interpretado como uma função no js, onde os parametros entrada são as PRPOS
//e o retorno são elm em html, que no caso é JSX 

//O state de um componente é realmente o estado do seu componente. Ele é um objeto onde você adiciona
//os estados que você vai precisar usar no seu componente



//componente aleatorio
class Frase extends Component {
    render() {
        return(
            <p>Valor da props: {this.props.fraseProp}</p> 
        );

    }
}

//componente aleatorio
class Botao extends Component {
    render() {
        return(
          <>
            <button>
             {this.props.botaoProp}
            </button>
          </>
        );             
    }
}



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
        console.log(this.state);
        return(
            <div className="app">

                {/* Declaro o valor da props quando inicializo o componente que à contém */}
                <Botao botaoProp="button" />         
                <Botao botaoProp="button2" />
                <Botao botaoProp="button3" />
                <Frase fraseProp="Vithanderson" />

            </div>
        );

    }
}

