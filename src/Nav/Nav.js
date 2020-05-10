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
                <input id='bInicio' className='botonNav' type='button' value='INICIO' onClick={this.props.funcionCambiarVentanas}></input>
                {
                    this.props.mostrarLoginOCerrarSesion
                    ?
                    <input id='bPerfil' className='botonNav' type='button' value='PERFIL' onClick={this.props.funcionCambiarVentanas}></input>
                    :
                    <div></div>
                }
                


                <input id='bRegistro' className='flotar' type='button' value='REGISTRO' onClick={this.props.funcionAparecerRegistro}></input>

                {
                    this.props.mostrarLoginOCerrarSesion
                    ?
                    <input id='bCerrarSesion' className='flotar' type='button' value='CERRAR SESION' onClick={this.props.funcionCambiarCerrarSesionALogin}></input>
                    :
                    <input id='bLogin' className='flotar' type='button' value='LOGIN' onClick={this.props.funcionAparecerLogin}></input>

                }            

                
                
            </nav>
        )
    }
}

export default Nav;