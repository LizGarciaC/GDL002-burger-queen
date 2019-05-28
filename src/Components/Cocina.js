import React from 'react';
import { Link } from 'react-router-dom';
import { Component } from 'react';
import firebase from '../firebase';

class Cocina extends Component {
    constructor(props) {
        super(props);
        this.state = { pedidos: [] };

    }

    componentDidMount() {
        firebase.database().ref('/orders/').once('value')
            .then((snapshot) => {
                let pedido = snapshot.val();

                // this.setState({
                //     pedidos:pedido
                // });
            });
    }




    render() {
        return (

            <div>
                <div>
                    <button className='btnBase2'><Link className='noDecor' to="/pedidos">Pedidos</Link></button>
                    <button className='btnBase2'><Link className='noDecor' to="/">Cerrar Sesión</Link></button>
                </div>
                <h1>Cocina</h1>
                {this.state.pedidos.map((detail, index) =>
                    <table>
                        <tr><th>Cantidad</th><th>Producto</th>       <th>Total</th><th></th></tr>
                        {detail.products.map((detail, index) =>
                            <tr><td>{detail.cant}</td><td>{detail.name}</td><td>{detail.price * detail.cant}</td>
                                <td></td></tr>

                        )}
                    </table>
                )}

            </div>


        )
    }
}
export default Cocina;
