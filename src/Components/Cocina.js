import React from 'react';
import { Link } from 'react-router-dom';
import {Component} from 'react';

class Cocina extends Component {
    render() {
        return (

            <div>
                <div className='logo2'>
                    Cocina

                    <Link className='btnBase redBtn' to="/">Inicio</Link>

                </div>
            </div>


        )
    }
}
export default Cocina;
