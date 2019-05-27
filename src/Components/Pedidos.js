
import React from 'react';
import { Link } from 'react-router-dom';
import { Component } from 'react';
import './pedidos.css';
import './Login.css';
import data from './desayunos.json';
import data2 from './comida.json'

class Pedidos extends Component {
    constructor(props) {
        super(props);
        this.state = { menu: data, pedidos: [] };

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
            if (item.name === order.name){
                item.cant++;
                isNew = false;
                return;
            }
        });
        if (isNew){
            newPedidos.push(order);
        }
        this.setState({
            pedidos: newPedidos,
        });
     }

    showDesayuno() {
        this.setState({
            menu: data,
            state: this.state
        });
    }

    showComida() {
        this.setState({
            menu: data2,
            state: this.state
        });
    }

    delete(name, index) {
        this.state.pedidos.forEach((pedido)=>{
            if (pedido.name==name){
                if (pedido.cant>1){
                    pedido.cant--;
                }
                else{
                        this.state.pedidos.splice(index,1);
                }
                this.setState({
                    state: this.state
                });
            }
        });

            
     
    }





    render() {
        return (
            <div>
                <div>
                    <input type='button' className='btnBase2' value='Desayunos' onClick={() => { this.showDesayuno(); }} />
                    <input type='button' className='btnBase2' value='Almuerzos' onClick={() => { this.showComida(); }} />

                    {this.state.menu.map((detail, index) =>
                        <div>
                            <input type='button' value={detail.name + detail.price} onClick={() => {
                                this.add(detail.name, detail.price);
                            }} />
                        </div>
                    )}

                    {/* <button><Link className='btnBase2' to="/">Inicio</Link></button> */}
                    <button className='btnBase2'><Link className='noDecor' to="/">Inicio</Link></button>
                    <button className='btnBase2'><Link className='noDecor' to="/cocina">Cocina</Link></button>
                    {/* <span className='lblUsername'> Usuario: </span> */}
                </div>
                <div>
                    <h1>Pedidos</h1>
                    <table>
                        <tr><th>Cantidad</th><th>Producto</th>       <th>Total</th><th></th></tr>
                        {this.state.pedidos.map((detail, index) =>
                            <tr><td>{detail.cant}</td><td>{detail.name}</td><td>{detail.price * detail.cant}</td>
                            <td><input type='button' value='Eliminar'onClick={()=> {this.delete(detail.name, index);}}/> </td></tr>

                        )}
                    </table>
                </div>
            </div>
        )
    }
}

export default Pedidos;