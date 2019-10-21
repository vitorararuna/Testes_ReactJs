
import React, { Component, useState } from 'react';
import { Modal, OverlayTrigger, Tooltip, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './estilos.css'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';


export default class Testes extends Component {
    constructor(props) {
        super(props);

        this.state = {
            postImages: [
                "https://ucarecdn.com/a96a2cce-a948-49e0-97ac-779579176e3e~3/nth/1/",
                "https://ucarecdn.com/80407fea-32fb-4003-8b5f-6618b62470a8~1/nth/0/m"
            ],
            postPrice: 0,
            postText: "default legenda",
        };

        this.handleSubmit = this.handleSubmit.bind(this); /*Referenciando o this no escopo da funcao handleSubmit*/
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e) { //handleSubmit que está alterando o estado do meu componente
        var precoNovo = e.target.querySelector('.preco').value;
        var textoNovo = e.target.querySelector('.legenda').value;

        this.setState({
            postPrice: precoNovo,
            postText: textoNovo
        })

        console.log(this.state.postPrice, this.state.postText);

        e.preventDefault(); /*Previnindo o recarregamento da página*/

    }

    handleChange(e) {    //HandleChangeUniversal => basta passar o value={this.state.algum} e o name='algum' no input do formulário

        /*Vamos alterar o estado da nossa aplicação toda vez que haver uma alteração no input, passando o seu valor*/
        var target = e.target;
        var value = target.value;
        var name = target.name;
        this.setState({ [name]: value });

    }


    render() {
        return (

            <div>
                <h2>{this.props.title}</h2>

            <form onSubmit={this.handleSubmit} >
                <div className="card-body" style={{ "minHeight": "8rem" }}>
                    
                    <div className="row align-items-center">
                        <div className="col-md-1 text-right w-100 ">
                            <div><span className="vitin4"> <FontAwesomeIcon icon={['fas','file-image']} size="lg"/></span></div>
                        </div>
                        {this.state.postImages.map((postImage, index) => {
                            return (
                                <div className="col-md-3 text-right">
                                    <button className="btn btn-rounded-circle btn-white btn-sm vitin3 vitin2">x</button>
                                    <img className="w-100 vitin2" src={postImage} alt="img"></img>
                                </div>
                            )
                        })}
                    </div>

                    <div className="row align-items-center">
                        <div className="col-md-12 vitin1">
                                <label>
                                    Preço
                                </label> <br/>
                                
                                <input 
                                    className="preco vitin5"
                                    type="number"
                                    placeholder="Alterar Preço"
                                    value={this.state.postPrice}
                                    name="postPrice"
                                    onChange={this.handleChange}
                                />
                        </div>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-md-12 vitin1">
                                <label>
                                    Legenda
                                </label><br/>
                                <textarea 
                                    className="legenda vitin5 col-md-6"
                                    type="text" 
                                    placeholder="Alterar Legenda"
                                    value={this.state.postText}
                                    name="postText"
                                    onChange={this.handleChange}
                                />
                        </div>
                    </div>

                        <button 
                        class="btn btn-danger rosinha" 
                        type="submit"
                        >
                        Salvar Alterações
                        </button>


                </div>
            </form>            


            </div>
        );
}

} 