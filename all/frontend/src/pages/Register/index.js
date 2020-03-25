import React, {useState} from 'react' 
import './style.css'
import {Link, useHistory} from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi'

import api from '../../services/api'

import logoImg from '../../assets/logo.svg'

export default function Register(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();

    async function handleRegister(e){
        e.preventDefault();

        const data = {
            name,
            email,
            whatsapp,
            city,
            uf
        }        
        try {
            const response = await api.post('ongs', data);
            alert(`seu id é: ${response.data.id}`)
            history.push('/');
        } catch (error) {
            alert(`Error: ${error}`)
        }
    }
    
    return(
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="BTH"/>

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude as pessoas a encontrarem os casos da sua ONG.</p>
                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041" />
                        Não tenho Cadastro
                    </Link>
                </section>
                <form onSubmit={handleRegister}>
                    <input placeholder="Nome da Ong"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <input placeholder="Email" type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input placeholder="WhatsApp" 
                        value={whatsapp}
                        onChange={e => setWhatsapp(e.target.value)}
                    />

                    <div className="input-group">
                        <input placeholder="Cidade"
                        value={city}
                        onChange={e => setCity(e.target.value)}
                    />
                        <input placeholder="UF" style={{width: 80 }}
                        value={uf}
                        onChange={e => setUf(e.target.value)}
                    />
                    </div>

                    <button type="submit" className="button">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}