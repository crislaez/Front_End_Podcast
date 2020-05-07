import React from 'react';

//css
import './Section.css';

//Componentes
import Aside from '../Aside/Aside'
import VerTodo from '../VerTodo/VerTodo'
import Perfil from '../Perfil/Perfil'
import Login from '../Login/Login'
import Registro from '../Registro/Registro'

class Section extends React.Component{

    // constructor(props){
    //     super(props);
    // }

    render(){
        return(
            <section>
             <Aside aparecerAside={this.props.aparecerAside}></Aside>
            {
                this.props.cambioVentanas === 'bVetTodos'
                ?
                <VerTodo></VerTodo>
                :
                this.props.cambioVentanas === 'bPerfil'
                ?
                <Perfil></Perfil>
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
            </section>
        )
    }
}

export default Section;