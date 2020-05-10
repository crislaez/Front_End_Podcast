import React from 'react';

//css
import './App.css';
//Componentes
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import Section from '../Section/Section';
// import Aside from '../Aside/Aside';
import Footer from '../Footer/Footer';


class App extends React.Component{

    _VLoginOCerrarSesion = false;
    _VAside = false;
    _VLogin = false;
    _VRegistro = false;
    _VSubirPodcast = false;

    constructor(props){
        super(props);
        this.state = 
            {
                mostrarLoginOCerrarSesion:false,
                cambioVentanas:'bVetTodos',
                aparecerAside:'0%',
                ventanaLogin:false,
                ventanaRegistro:false,
                aparecerformularioSubirPodcast:false
            };
    }

    componentDidMount(){

        if(localStorage.getItem('usuario') && localStorage.getItem('primariKey')){
            this.setState({mostrarLoginOCerrarSesion:true});
            this._VLoginOCerrarSesion = true;
            console.log('LocalStorage Existe');
        }   
    }

    //funcion para aparecer el aside
    funcionAParecerNav = () => {
        if(!this._VAside){
            this.setState({aparecerAside:'25%'});
            this._VAside = true;
        }else{
            this.setState({aparecerAside:'0%'});
            this._VAside = false;
        }
    }

    //funcion para ir cambiando de ventanas
    funcionCambiarVentanas = (event) => {
        console.log(event.target.id);
        this.setState({cambioVentanas:event.target.id});
    }

    /**
     * funcion que se llamara en el onClick de Cerrar sesion, 
     * se borraran las 2 varaibles del localStorage usuario y primariKey
     */
    funcionCambiarCerrarSesionALogin = () => {
        let confirmacion = window.confirm('Seguro que quieres cerrar sesion?');
        if(confirmacion){
            localStorage.removeItem('usuario');
            localStorage.removeItem('primariKey');
            //para que desaparezca el boton de perfil del nav y mostramos el boton de login de nuevo
            this.setState({mostrarLoginOCerrarSesion:false,cambioVentanas:'bVetTodos'});
            this._VLoginOCerrarSesion = false;
        }       
    }

    //funcion para cuando te logueas, que se cambie el boton de login a cerrar sesion
    funcionCambarLoginACerrarSesion = (datosUsuario) => {
        if(datosUsuario){
            localStorage.setItem('usuario',datosUsuario.nombre);
            localStorage.setItem('primariKey',datosUsuario.primariKey)
            this.setState({mostrarLoginOCerrarSesion:true});
            this._VLoginOCerrarSesion = true;            
        }        
    }    

    //funcion para qeu cuadno demos a la ventana login aparezca el componente y el formulario
    funcionAparecerLogin = () => {
        if(!this._VLogin){
            this.setState({ventanaLogin:true});
            this._VLogin = true;
        }else{
            this.setState({ventanaLogin:false});
            this._VLogin = false;
        }
    }
    
    //funcion para que aparezca el formulario cuando pionchemos en el boton de registro
    funcionAparecerRegistro = () => {
        if(!this._VRegistro){
            this.setState({ventanaRegistro:true});
            this._VRegistro = true;
        }else{
            this.setState({ventanaRegistro:false});
            this._VRegistro = false;
        }
    }

    /**
     * funcion que se ejecutara cuando toquemos el boton 'subir foto'
     * del componente perfil 
     */

    funcionAparecerFormularioSubirPodcast = () => {
        if(!this._VSubirPodcast){
            this.setState({aparecerformularioSubirPodcast:true});
            this._VSubirPodcast = true
        }else{
            this.setState({aparecerformularioSubirPodcast:false});
            this._VSubirPodcast = false;
        }
    }   

    //funcion para cambiar la ventana cuando busquemos un usuario desde el aside
    funcionCambiarVentanaPerfilBuscador = () => {
        this.setState({cambioVentanas:'bPerfilBuscador'})
    }

    render(){

        return(
            <div>
                <Header></Header>

                <Nav 
                mostrarLoginOCerrarSesion={this.state.mostrarLoginOCerrarSesion}
                funcionCambiarVentanas={this.funcionCambiarVentanas}
                funcionAParecerNav={this.funcionAParecerNav}
                funcionCambiarCerrarSesionALogin={this.funcionCambiarCerrarSesionALogin}
                funcionAparecerLogin={this.funcionAparecerLogin}
                funcionAparecerRegistro={this.funcionAparecerRegistro}
                ></Nav>

                <Section
                cambioVentanas={this.state.cambioVentanas}
                aparecerAside={this.state.aparecerAside}
                ventanaLogin={this.state.ventanaLogin}
                ventanaRegistro={this.state.ventanaRegistro}
                funcionAparecerLogin={this.funcionAparecerLogin}
                funcionAparecerRegistro={this.funcionAparecerRegistro}
                funcionCambarLoginACerrarSesion={this.funcionCambarLoginACerrarSesion}
                funcionAparecerFormularioSubirPodcast={this.funcionAparecerFormularioSubirPodcast}
                aparecerformularioSubirPodcast={this.state.aparecerformularioSubirPodcast}
                funcionAParecerNav={this.funcionAParecerNav}
                funcionCambiarVentanaPerfilBuscador={this.funcionCambiarVentanaPerfilBuscador}
                ></Section>

                <Footer></Footer>
            </div>
        )
    }
}

export default App;