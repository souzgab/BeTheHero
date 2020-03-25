import React, { useState } from 'react'
import './style.css'
import {Link, useHistory} from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi'

import logoImg from '../../assets/logo.svg'
import api from '../../services/api'

export default function NewIncident(){
    const history = useHistory();
    const [title, setTitle] = useState('')
    const [description, setDesc] = useState('')
    const [value, setValue] = useState('')
    const ongId = localStorage.getItem('ongId');
    async function handleNewInc(e){
        e.preventDefault();

        const data = {
            title,
            description,
            value,
        }

        try {
            await api.post('incidents', data, {
                headers:{
                    Authorization: ongId
                }
            })
            alert(`Incidente Cadastrado com sucesso!`)
            history.push('/profile')
        } catch (error) {
            alert(`error: ${error}`)
        }
    }

    return(
        <div className="new-incident-container">
        <div className="content">
            <section>
                <img src={logoImg} alt="BTH"/>

                <h1>Cadastrar Novo Caso</h1>
                <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
                <Link className="back-link" to="/">
                    <FiArrowLeft size={16} color="#E02041" />
                    Voltar para Home
                </Link>
            </section>
            <form onSubmit={handleNewInc}>
                <input placeholder="Titulo do Caso..."
                value={title}
                onChange={e => setTitle(e.target.value)}
                />
                <textarea placeholder="Descrição..."
                value={description}
                onChange={e => setDesc(e.target.value)}
                />
                <input placeholder="Valor em Reais..." 
                value={value}
                onChange={e => setValue(e.target.value)}
                />

                <button type="submit" className="button">Cadastrar</button>
            </form>
        </div>
    </div>
    )
}