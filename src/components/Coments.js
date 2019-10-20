import React, {Component, useState} from 'react';
import { Modal, OverlayTrigger, Tooltip, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

export default class Coments extends Component {
   
    render(){
        return(

            <div>
                <p>{this.props.text}</p>

            </div>
        );
    }
} 