import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';


function Login() {
    return (
        <div className='login'>
            <div className='logo'>
           {/* </div></div> <img src=> </img> */}

                Burger Queen
            </div>

            <div className='footer'>
                <div>
                    <span className='lblUsername'> Usuario: </span>
                    {/* <input className='btnBase' type='text'></input> */}


                    <select id="seleccion" className='btnBase' onchange="seleccion()">
                        <option id="blanco"></option>
                        <option id="user1">Mesero-1</option>
                        <option id="user2">Mesero-2</option>
                        <option id="user3">Cocinero-1</option>
                        <option id="user4">cocinero-2</option>

                    </select>
                </div>

            </div>
            <div>
                <button className='btnBase2'><Link className='noDecor' to="/pedidos">Pedidos</Link></button>
                <button className='btnBase2'><Link className='noDecor' to="/cocina">Cocina</Link></button>

    {/* { <Link className='btnBase2' to="/cocina">Cocina</Link> } */}
                {/* <input className='btnBase redBtn' type='button' value='Pedidos'></input> */}
                {/* <input className='btnBase whiteBtn' type='button' value='Cocina'></input> */}
            </div>

        </div>


    )
}

export default Login;