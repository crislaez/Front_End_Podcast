import React from 'react';

//css
import './Section.css';

//Componentes
import Aside from '../Aside/Aside'
import VerTodo from '../VerTodo/VerTodo'
import Perfil from '../Perfil/Perfil'
import Login from '../Login/Login'
import Registro from '../Registro/Registro'
import FormularioSubirPodcas from '../FormularioSubirPodcas/FormularioSubirPodcas'
import PerfilBuscador from '../PerfilBuscador/PerfilBuscador'
class Section extends React.Component{

    constructor(props){
        super(props);
        this.state = 
            {
                podcastUsuarios:[],
                nombre:''
            }
    }
    
    //funcion para recibir los datos del usuario para buscar
    funcionBuscarUsuario = (usuario, nombre) => {
        this.setState({podcastUsuarios:usuario, nombre:nombre});
    }

    render(){
        return(
            <section>
             <Aside aparecerAside={this.props.aparecerAside} funcionBuscarUsuario={this.funcionBuscarUsuario} funcionAParecerNav={this.props.funcionAParecerNav} funcionCambiarVentanaPerfilBuscador={this.props.funcionCambiarVentanaPerfilBuscador}></Aside>
            {
                this.props.cambioVentanas === 'bVetTodos'
                ?
                <VerTodo></VerTodo>
                :
                this.props.cambioVentanas === 'bPerfil'
                ?
                <Perfil funcionAparecerFormularioSubirPodcast={this.props.funcionAparecerFormularioSubirPodcast}></Perfil>
                :
                this.props.cambioVentanas === 'bPerfilBuscador'
                ?
                <PerfilBuscador podcastUsuarios={this.state.podcastUsuarios} nombre={this.state.nombre}></PerfilBuscador>
                :
                <div></div>
            }

            {
                this.props.ventanaLogin
                ?
                <Login funcionAparecerLogin={this.props.funcionAparecerLogin}
                funcionCambarLoginACerrarSesion={this.props.funcionCambarLoginACerrarSesion}
                ></Login>
                :
                <div></div>
            }

            {
                this.props.ventanaRegistro
                ?
                <Registro 
                funcionAparecerRegistro={this.props.funcionAparecerRegistro} 
                ></Registro>
                :
                <div></div>
            }

            {
                this.props.aparecerformularioSubirPodcast
                ?
                <FormularioSubirPodcas funcionAparecerFormularioSubirPodcast={this.props.funcionAparecerFormularioSubirPodcast}></FormularioSubirPodcas>
                :
                <div></div>
            }
            </section>
        )
    }
}

export default Section;