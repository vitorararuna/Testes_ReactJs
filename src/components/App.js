//React
import React, {Component} from 'react';
//Bootstrap
import { Modal, OverlayTrigger, Tooltip, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
//Meu css
import './App.css'




//O componente pode ser interpretado como uma função no js, onde os parametros entrada são as PRPOS
//e o retorno são elm em html, que no caso é JSX 

class Frase extends Component {
    render() {
        return(
            <p>Porps que colocada em App: {this.props.oTexto}</p> // defini a props "oTexto" aqui e quando chamei a classe em App, logo abaixo, mando o valor da props
        );

    }
}

class Botao extends Component {
    render() {
        console.log(this.props) 
        return(
          <>
            <button>{this.props.oBotao}</button>
            <p>Segunda props: {this.props.Outro}</p>
          </>
        );             
    }
}


export default class App extends Component {
    render() {
        return(
            <div className="app">
                <Botao oBotao="clique aqui" Outro="vihse"/>
                <Frase oTexto="Vithanderson"/>
                <Frase oTexto="Marinanderson"/>
                <Frase oTexto="Lukanderson"/>
            </div>
        );

    }
}

