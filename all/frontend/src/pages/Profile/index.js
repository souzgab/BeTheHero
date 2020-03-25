import React,{useEffect}from 'react'
import './style.css'
import {Link, useHistory} from 'react-router-dom'
import {FiPower, FiTrash2} from 'react-icons/fi'

import logoImg from '../../assets/logo.svg'
import api from '../../services/api'
import { useState } from 'react'

export default function Profile(){
    const [incidents, setIncidents] = useState([])
    const history = useHistory();
    const ongName = localStorage.getItem('ongName');
    const ongId = localStorage.getItem('ongId');

    useEffect(()=>{
        api.get('profile',{
            headers: {
                Authorization: ongId,
            }
        }).then(response => {
            setIncidents(response.data)
        })
    }, [ongId]);

    async function handleDeleteIncident(id){
        try {
            await api.delete(`incidents/${id}`,{
                headers: {
                    Authorization: ongId,
                }            
            })
            setIncidents(incidents.filter(incident => incident.id !== id))
        } catch (error) {
            alert(`Error ao deletar`)
        }
    }

    function handleLogout(){
        localStorage.clear();
        history.push('/')
    }

    return(
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="BTH"/>
                    <span>
                        Bem vindo ONG: <b>{ongName}</b>
                    </span>
                <Link className="button" to="/incidents/new">
                    Cadastrar novo Caso
                </Link>
                <button type="button" onClick={handleLogout}>
                    <FiPower size={18} color="#E02041"></FiPower>
                </button>
            </header>

            <h1>Casos cadastrados</h1>
            <ul>
                {incidents.map(incident => (
                    <li key={incident.id}>
                    <strong>Caso: </strong>
                    <p>{incident.title}</p>
                    
                    <strong>Descr</strong>
                    <p>{incident.description}</p>

                    <strong>valor</strong>
                    <p>{Intl.NumberFormat('pt-BR', {style : 'currency', currency: 'BRL'}).format(incident.value)}</p>

                    <button type="button" onClick={() => handleDeleteIncident(incident.id)}>
                        <FiTrash2 size={20} color="#a8a8b3"></FiTrash2>
                    </button>
                </li>
                ))}
            </ul>
        </div>
    )
}