import React from 'react';

//css
import './PerfilBuscador.css'
//componente
import Podcast from '../Podcast/Podcast'

class PerfilBuscador extends React.Component{

    constructor(props){
        super(props);
        this.state = 
            {
                arrayPodcast:[],
                nombre:''
            }
    }
    
    componentDidMount(){
        this.setState({arrayPodcast:this.props.podcastUsuarios, nombre: this.props.nombre})
        console.log('holaaa')
    }

    componentDidUpdate(prevProps){
        if(this.props !== prevProps){
            this.setState({arrayPodcast:this.props.podcastUsuarios, nombre: this.props.nombre})
         }        
     }
 

    render(){

        return(
            <article className='articlePerfilBuscador'>
                <div className='divNombreUsuario'>
                    <h2>{this.state.nombre}</h2>
                </div>

                <div className='contenedorPerfilBuscador'>
                {
                    this.state.arrayPodcast
                    ?
                    this.state.arrayPodcast.map( (data, key) => {
                        return(
                            <Podcast key={key} foto={data.foto} titulo={data.titulo} mp3={data.mp3} id_podcast={data.id_podcast} handleClickBorrarPodcast={this.handleClickBorrarPodcast} display={false}></Podcast>
                        )
                    })
                    :
                    <div></div>
                }
                </div>
            </article>
        )
    }
}

export default PerfilBuscador;