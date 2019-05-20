import React from 'react';
import { Link } from 'react-router-dom';
import { Component } from 'react';
import './pedidos.css';
import data from './desayunos.json';
// import data2 from './comida.json'


class Pedidos extends Component {
    constructor(props) {
        super(props);
        this.state = { pedidos: [] };

    }

    add(name, price) {
        // alert(name);
    }

    render() {
        return (

            <div>
                        {/* <input className='btnBase redBtn'> Desayunos</input>
                        <input className='btnBase redBtn'>Almuerzos> </input> */}

            
                        {data.map((detail, index) =>
                            <div key={index}>
                                <input type='button' value={detail.name} onClick={() => {
                                    this.add(detail.name, detail.price);
                                }} />
                            </div>
                        )}

                        <Link className='btnBase redBtn' to="/">Inicio</Link>
            </div>


                    )
                }
            }

export default Pedidos;