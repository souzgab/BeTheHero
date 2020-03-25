import React, {useState} from 'react'
import {FiLogIn} from 'react-icons/fi'
import {Link, useHistory} from 'react-router-dom'

import api from '../../services/api'

import './style.css'
import heroesImg from '../../assets/heroes.png'
import logoImg from '../../assets/logo.svg'

function Logon(){
    const [id, setId] = useState('')
    const history = useHistory();

    async function handleLogin(e){
     e.preventDefault();

     try {
         const response = await api.post('sessions', {id})
        //  console.log(response.data.name)
        localStorage.setItem('ongId', id)
        localStorage.setItem('ongName', response.data.name)
        history.push('/profile')
     } catch (error) {
        alert(`Error: ${error}`)
     }
    }

    return(
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Logo"/>

                <form onSubmit={handleLogin}>
                    <h1>Faça Seu Logon</h1>
                    <input placeholder="Sua ID"
                        value={id}
                        onChange={e => setId(e.target.value)}
                    />
                    <button className="button" type="submit">Entrar</button>
                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041" />
                        Não tenho Cadastro
                    </Link>
                </form>

            </section>
            <img src={heroesImg} alt="Heroes"/>
        </div>
    )
}

export default Logon;