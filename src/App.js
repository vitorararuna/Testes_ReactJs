//React
import React, {Component, useState, useEffect} from 'react';
//Bootstrap
import { Modal, OverlayTrigger, Tooltip, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
//Meu css
//Meus componentes
import Retirada from './components/SoTestando2';
import TestandoH from './components/SoTestando3';

//Font-awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fab, fas)



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

    //render JSX
    render() {
        return(
            <div className="app">
                <TestandoH /> 
            </div>
        );

    }
}

