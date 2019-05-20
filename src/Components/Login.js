import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';


function Login() {
    return (
        <div className='login'>
            <div className='logo'>
                Burger Queen
            </div>

            <div className='footer'>
                <div>
                    <span className='lblUsername'> Usuario: </span>
                    {/* <input className='btnBase' type='text'></input> */}


                    <select id="seleccion" className='btnBase' onchange="seleccion()">
                        <option id="blanco"></option>
                        <option id="user1">Mesero-Liz</option>
                        <option id="user2">Mesero-Gress</option>
                        <option id="user">Cocinero-Jorge</option>
                        <option id="user">cocinero-Luca</option>

                    </select>
                </div>

            </div>
            <div>
                <Link className='btnBase redBtn' to="/pedidos">Pedidos</Link>
                <Link className='btnBase whiteBtn' to="/cocina">Cocina</Link>
                {/* <input className='btnBase redBtn' type='button' value='Pedidos'></input>
                <input className='btnBase whiteBtn' type='button' value='Cocina'></input> */}
            </div>

        </div>


    )
}

export default Login;