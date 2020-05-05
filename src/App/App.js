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

    constructor(props){
        super(props);
        this.state = 
            {
                mostrarLoginOCerrarSesion:false,
                cambioVentanas:'bVetTodos',
                aparecerAside:'0%'
            };
    }

    funcionCambiarLoginACerrarSesion = () => {
        if(!this._VLoginOCerrarSesion){
            this.setState({mostrarLoginOCerrarSesion:true});
            this._VLoginOCerrarSesion = true;
        }else{
            this.setState({mostrarLoginOCerrarSesion:false});
            this._VLoginOCerrarSesion = false;
        }
    }

    //funcion para ir cambiando de ventanas
    funcionCambiarVentanas = (event) => {
        console.log(event.target.id);
        this.setState({cambioVentanas:event.target.id});
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
    render(){

        return(
            <div>
                <header></header>

                <Nav 
                mostrarLoginOCerrarSesion={this.state.mostrarLoginOCerrarSesion}
                funcionCambiarVentanas={this.funcionCambiarVentanas}
                funcionAParecerNav={this.funcionAParecerNav}
                ></Nav>

                <Section
                cambioVentanas={this.state.cambioVentanas}
                aparecerAside={this.state.aparecerAside}
                ></Section>

                <Footer></Footer>
            </div>
        )
    }
}

export default App;