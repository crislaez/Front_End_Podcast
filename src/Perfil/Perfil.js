import React from 'react';

//css
import './Perfil.css';
//componente
// import FormularioSubirPodcas from '../FormularioSubirPodcas/FormularioSubirPodcas'

class Perfil extends React.Component{
    
    _isMount = false;

    constructor(props){
        super(props);
        this.state = 
            {
                usuario:''
            };
    }

    componentDidMount(){
        this._isMount = true;

        if(localStorage.getItem('usuario')){
            this.setState({usuario:localStorage.getItem('usuario')})
        }
    }

    render(){
        
        return(
            <article className='articlePerfil'>
                <div className='divTituloPerfil'>
                    <h2>PERFIL</h2>
                </div>

                <div className='contenedorPerfil'>
                    <div className='divSubtitulo'>
                        <input type='button' value='SUBIR FOTO' onClick={this.props.funcionAparecerFormularioSubirPodcast}></input>
                        <h3>Bienvenido {this.state.usuario}</h3>
                    </div>
                </div>
            </article>
        )
    }
}

export default Perfil;