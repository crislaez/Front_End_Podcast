import React from 'react';

//css
import './VerTodo.css';
//componente
import Podcast from '../Podcast/Podcast'
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

export default VerTodo;