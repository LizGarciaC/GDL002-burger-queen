
import React from 'react';
import { Link } from 'react-router-dom';
import { Component } from 'react';
import firebase from '../firebase';

class Pedidos extends Component {
    constructor(props) {
        super(props);
        this.state = { menu: [], pedidos: [], data: null };
    }

    componentDidMount() {
        firebase.database().ref('/menu').once('value')
            .then((snapshot) => {
                this.state.data = snapshot.val();
                this.setState({
                    menu: this.state.data.breakfast
                });
            });
    }



    //Método para agregar una orden a los pedidos
    add(name, price) {
        // alert(name);
        let isNew = true;
        let order = {
            cant: 1,
            name: name,
            price: price
        };
        let newPedidos = this.state.pedidos;

        this.state.pedidos.forEach(item => {
            if (item.name === order.name) {
                item.cant++;
                isNew = false;
                return;
            }
        });
        if (isNew) {
            newPedidos.push(order);
        }
        this.setState({
            pedidos: newPedidos,
        });
    }

    showDesayuno() {
        this.setState({
            menu: this.state.data.breakfast,
            state: this.state
        });
    }

    showComida() {
        this.setState({
            menu: this.state.data.lunch,
            state: this.state
        });
    }

    //Método para borrar un elemento de la lista de  pedidos

    delete(name, index) {

        let newPedidos = this.state.pedidos;

        newPedidos.forEach((pedido) => {
            if (pedido.name == name) {
                if (pedido.cant > 1) {
                    pedido.cant--;
                }
                else {
                    newPedidos.splice(index, 1);
                }
                this.setState({
                    state: this.state
                });
            }
        });
    }

    sendOrder() {
        var order = {
            id: "",
            products: this.state.pedidos,
            client: "",
            employeeId: ""
        }
        var newPostKey = firebase.database().ref().child('orders').push().key;
        var update = {};
        update['/orders/' + newPostKey] = order;
        firebase.database().ref().update(update);
        this.setState({
            state: this.state.pedidos=[]
        });
        
alert("Pedido Enviado");

    }

    // Imprimir en el DOM 
    render() {
        return (
            <div>
                <div>
                    <input type='button' className='btnBase2' value='Desayunos' onClick={() => { this.showDesayuno(); }} />
                    <input type='button' className='btnBase2' value='Almuerzos' onClick={() => { this.showComida(); }} />
                    <button className='btnBase2'><Link className='noDecor' to="/cocina">Cocina</Link></button>
                    <button className='btnBase2'><Link className='noDecor' to="/">Inicio</Link></button>


                    {this.state.menu.map((detail, index) =>
                        <div>
                            <input type='button' value={detail.name + detail.price} onClick={() => {
                                this.add(detail.name, detail.price);
                            }} />
                        </div>
                    )}


                </div>
                <div>
                    <h1>Pedidos</h1>
                    <table>
                        <tr><th>Cantidad</th><th>Producto</th>       <th>Total</th><th></th></tr>
                        {this.state.pedidos.map((detail, index) =>
                            <tr><td>{detail.cant}</td><td>{detail.name}</td><td>{detail.price * detail.cant}</td>
                                <td><input type='button' value='Eliminar' onClick={() => { this.delete(detail.name, index); }} /> </td></tr>
                        )}
                        {/* <td>Total + {detail.price * detail.cant}</td> */}
                    </table>
                    <input type='button' className='btnBase2' value='Enviar Pedido' onClick={() => { this.sendOrder(); }} />
                </div>
            </div>
        )
    }
}

export default Pedidos;