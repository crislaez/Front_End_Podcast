import React from 'react';

//css
import './Perfil.css';
//componente
import Podcast from '../Podcast/Podcast'

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

     handleClickBorrarPodcast = (event) => {
        // console.log(event.target.dataset.indice);
        let confirmacion = window.confirm('Seguro que desea borrar el podcast?');

        if(confirmacion){
            fetch('http://localhost:3001/api/deletePodcast/'+event.target.dataset.indice,{method:'DELETE'})
            .then(data => data.json())
            .then(response => {
                console.log(response)
                alert('Podcast borrado');
                this.funcionGetFetch();
            })
            .catch(err => {
                console.log(err.message);
            })
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
                                <Podcast key={key} foto={data.foto} titulo={data.titulo} mp3={data.mp3} id_podcast={data.id_podcast} handleClickBorrarPodcast={this.handleClickBorrarPodcast} display={true}></Podcast>
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