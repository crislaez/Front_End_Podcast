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
                usuario:'',
                arrayPodcast:[]
            };
    }

    componentDidMount(){
        this._isMount = true;

        if(localStorage.getItem('usuario') && localStorage.getItem('primariKey')){
            this.setState({usuario:localStorage.getItem('usuario')});
            //llamos a la funcion que cargara el fetch y nos llenara el array con los podcast
            this.funcionGetFetch();
        }
    }
    //funcion para cargar el fetch
    funcionGetFetch = () => {

        fetch('http://localhost:3001/api/podcast/'+localStorage.getItem('primariKey'),{mehotd:'GET'})
        .then(data => data.json())
        .then(response => {
            console.log(response.data.data)
            this.setState({arrayPodcast:response.data.data})
        })
    }
    
    componentDidUpdate(prevProps){
        if(this.props !== prevProps){
            this.funcionGetFetch();
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

                    <div className='contenidoPodcast'>

                    {
                        this._isMount && this.state.arrayPodcast
                        ?
                        this.state.arrayPodcast.map( (data, key) => {
                            return(
                                <div key={key} className='divPodcast'>
                                    <div className='divPodcastFoto'>
                                        <img src={data.foto} alt={data.foto}></img>
                                    </div>
                                    <div className='divPodcastTitulo'>
                                        <p><strong>{data.titulo}</strong></p>
                                        <audio controls>
                                            <source src={data.mp3} type="audio/mpeg"></source>
                                        </audio>
                                        <a href='' download={data.mp3}>Descargar</a>
                                    </div>
                                </div>
                            )
                        })
                        :
                        <div></div>
                    }
                    </div>
                </div>
                
            </article>
        )
    }
}

export default Perfil;