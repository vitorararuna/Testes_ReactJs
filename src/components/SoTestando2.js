import React, {Component, useState} from 'react';
import { Modal, OverlayTrigger, Tooltip, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './estilos.css'

export default class Testes2 extends Component {
   
    render(){
        return(

            <div>
                <p>{this.props.text}</p>

            </div>
        );
    }
} 