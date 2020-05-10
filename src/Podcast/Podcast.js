import React from 'react';
//css
import './Podcast.css'

class Podcast extends React.Component{

    render(){

        return(
            <div className='divPodcast'>
                <div className='divPodcastFoto'>
                    <img src={this.props.foto} alt={this.props.foto}></img>
                </div>
                <div className='divPodcastTitulo'>
                    <p><strong>{this.props.titulo}</strong></p>
                    <audio controls>
                        <source src={this.props.mp3} type="audio/mpeg"></source>
                    </audio>
                    <a href='' download={this.props.mp3}>Descargar</a>
                    {
                        this.props.display
                        ? 
                        <input type='button' value='Borrar' data-indice={this.props.id_podcast} onClick={this.props.handleClickBorrarPodcast}></input>
                        :
                        <div></div>
                    }
                   
                </div>
            </div>
        )
    }
}

export default Podcast