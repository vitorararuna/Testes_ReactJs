import React, { Component, useState, useEffect, } from 'react';
import { Modal, OverlayTrigger, Tooltip, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './estilos.css';

//UTILIZANDO HOOKS


export default function TestandoH() {

    const [repositories, setRepositories] = useState([]);


    //O useEffeect recebe 2 principais parâmetros: o primeiro é uma função que será executada e o segundo é uma informação que indica em quais circunstâncias essa função deve ser executada ("quando certa variável for alterada, dispaarar o useEffect"). Se tiver vazio, significa que o useEffect só vai ser disparado uma vez
    //E posso ter quantos useEffects eu quiser  " useEffect(() => {}, []); "

    useEffect( () => {
        async function Load() {
            const response = await fetch('https://api.github.com/users/vitorararuna/repos');
            const data = await response.json();
            setRepositories(data);
        }
        Load();
    }, []);

    function handleFavorite(id){
        const newRepositories = repositories.map(repo =>{
            return repo.id === id ? {...repo, favorite: true} : repo   //adiciona a informação "favorite" no repo especificado
        });
        setRepositories(newRepositories);
        console.log(repositories);
    }


    return (
            <ul>
                {repositories.map(repo => (
                    <li key={repo.id}>
                        {repo.name}
                        {repo.favorite && <span>(favorito)</span>}
                        <button onClick={()=> handleFavorite(repo.id)}>Favoritar</button>
                    </li>
                ))}
            </ul>
    );


}