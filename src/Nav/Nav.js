import React from 'react';

//css
import './Nav.css'
//font awesoma
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons'

class Nav extends React.Component{

    render(){

        return(
            <nav>
                <button id='bAside' className='botonNav' onClick={this.props.funcionAParecerNav}><FontAwesomeIcon icon={faBars}></FontAwesomeIcon></button>
                <input id='bVetTodos' className='botonNav' type='button' value='VER TODOS' onClick={this.props.funcionCambiarVentanas}></input>

                <input id='bRegistro' className='flotar' type='button' value='REGISTRO' onClick={this.props.funcionCambiarVentanas}></input>

                {
                    this.props.mostrarLoginOCerrarSesion
                    ?
                    <input id='bCerrarSesion' className='flotar' type='button' value='CERRAR SESION' onClick={this.props.funcionCambiarVentanas}></input>
                    :
                    <input id='bLogin' className='flotar' type='button' value='LOGIN' onClick={this.props.funcionCambiarVentanas}></input>

                }            

                
                
            </nav>
        )
    }
}

export default Nav;