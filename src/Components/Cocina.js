import React from 'react';
import { Link } from 'react-router-dom';
import { Component } from 'react';
import data from './pedidosTest.json';

class Cocina extends Component {
    constructor(props) {
        super(props);
        this.state = { pedidos: data };

    }

    render() {
        return (

            <div>
                {this.state.pedidos.map((detail, index) => 
                                    <table>
                        <tr><th>Cantidad</th><th>Producto</th>       <th>Total</th><th></th></tr>
                {detail.map((detail, index) =>
                            <tr><td>{detail.cant}</td><td>{detail.name}</td><td>{detail.price * detail.cant}</td>
                            <td></td></tr>

                        )}
                                            </table>
                )}
                <div className='logo2'>
                    Cocina

                    <button className='btnBase2'><Link className='noDecor' to="/">Cerrar Sesión</Link></button>
                    

                </div>
            </div>


        )
    }
}
export default Cocina;
