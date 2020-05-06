import React from 'react';

//css
import './Section.css';

//Componentes
import Aside from '../Aside/Aside'
import VerTodo from '../VerTodo/VerTodo'
import Login from '../Login/Login'
import Registro from '../Registro/Registro'

class Section extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <section>
             <Aside aparecerAside={this.props.aparecerAside}></Aside>
            {
                this.props.cambioVentanas === 'bVetTodos'
                ?
                <VerTodo></VerTodo>
                :
                <div></div>
            }

            {
                this.props.ventanaLogin
                ?
                <Login funcionAparecerLogin={this.props.funcionAparecerLogin}></Login>
                :
                <div></div>
            }

            {
                this.props.ventanaRegistro
                ?
                <Registro funcionAparecerRegistro={this.props.funcionAparecerRegistro} funcionAparecerLogin={this.props.funcionAparecerLogin}></Registro>
                :
                <div></div>
            }
            </section>
        )
    }
}

export default Section;