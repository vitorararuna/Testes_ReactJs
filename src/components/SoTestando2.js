import React, { Component, useState } from 'react';
import { Modal, OverlayTrigger, Tooltip, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './estilos.css';


//Trabalhar com Modal
export default function Testes2() {

    const [stt1, setStt1] = useState('');

    return (

        <div className="main-content">

            <div className="header">
                <div className="container-fluid">
                    <div className="header-body">
                        <div className="row align-items-end">
                            <div className="col">
                                <h1 className="header-title">
                                    Retirada de Capital
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">

                <div className="row mt-6 mb-6">
                    <div className="form-wizard col-md-9 offset-1">
                        <Form.Group className="mb-5">
                            <Form.Label className="mb-5 mr-2">Informações Pessoasis</Form.Label>

                            <div className="row mb-3">
                                <div className="col-md-4">
                                    <lable>Usuário:</lable>
                                </div>

                                <div className="col-md-8">
                                    <Form.Control className="b-radius" />
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col-md-4">
                                    <lable>Conta:</lable>
                                </div>

                                <div className="col-md-8">
                                    <Form.Control className="b-radius" />
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col-md-4">
                                    <lable>N° de Posts Publicados:</lable>
                                </div>

                                <div className="col-md-8">
                                    <Form.Control className="b-radius" />
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col-md-4">
                                    <lable>Saldo:</lable>
                                </div>

                                <div className="col-md-8">
                                    <Form.Control className="b-radius" />
                                </div>
                            </div>


                        </Form.Group>
                    </div>

                    <div className="form-wizard col-md-9 offset-1">
                        <Form.Group className="mb-5">
                            <Form.Label className="mb-5 mr-2">Opções de Retirada</Form.Label>

                            <div className="row mb-3">
                                <div className="col-md-4">
                                    <lable>Transferência Online</lable>
                                </div>

                                <div className="col-md-8">
                                    <Form.Control className="b-radius" />
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col-md-4">
                                    <lable>PayPal</lable>
                                </div>

                                <div className="col-md-8">
                                    <Form.Control className="b-radius" />
                                </div>
                            </div>

                        </Form.Group>
                    </div>

                </div>
            </div>

        </div >

    )
} 
