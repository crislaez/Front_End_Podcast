import React from 'react';

//css
import './VerTodo.css';

class VerTodo extends React.Component{
    _isMount = false;

    constructor(props){
        super(props);
        this.state = 
            {
                array:[]
            }
    }

    componentDidMount(){
        this._isMount = true;

        fetch('http://localhost:3001/api/podcast',{method:'GET'})
        .then(data => data.json())
        .then(response => {
            console.log(response.data.data);
            this.setState({array:response.data.data});
        })
    }

    render(){

        return(
            <article className='articleVerTodo'>

                <div className='divTituloVerTodo'>
                    <h2>VER TODO</h2>
                </div>

                <div className='contenedorVerTodo'>

                {
                    this.state.array
                    ?
                    this.state.array.map( (data, key) => {
                        return(
                            <div key={key} className='divPodcastVerTodo'>
                            <div className='divPodcastFotoVerTodo'>
                                <img src={data.foto} alt={data.foto}></img>
                            </div>
                            <div className='divPodcastTituloVerTodo'>
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
            </article>
        )
    }
}

export default VerTodo;