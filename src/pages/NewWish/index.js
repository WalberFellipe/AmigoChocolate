import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './style.css'
import api from '../../services/api';
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi';


export default function NewWish() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const history = useHistory();
    const userId = localStorage.getItem('userId')

    async function handleNewWish(e) {
        e.preventDefault();
        const data = {
            name, description
        }
        try {
            await api.post('wishlist', data, {
                headers: {
                    id: userId
                }
            });
            history.push('/wishlist')
        } catch (err) {
            console.log(err);
            alert('Ocorreu um erro tente novamente')
        }

    }

    return (
        <div className="container">
            <h1>AMIGO CHOCOLATE</h1>
            <p>uma delicia de surpresa</p>
            <div className="content">
                <form onSubmit={handleNewWish}>
                    <Link to="/wishlist"><FiArrowLeft size="16" /> Voltar</Link>
                    <label>Mostre ao seus amigos qual chocolate<br /> qual chocolate gostaria de ganhar  </label>
                    <label>Desejo: *</label>
                    <input placeholder="Oque deseja receber:"
                        id="name"
                        value={name}
                        onChange={e => setName(e.target.value)} />

                    <label>Descrição:</label>
                    <input placeholder="Descreva o que gostaria de receber:"
                        id="name"
                        value={description}
                        onChange={e => setDescription(e.target.value)} />

                    <button className="btn">Salvar</button>
                </form>
            </div>
        </div>
    )
}