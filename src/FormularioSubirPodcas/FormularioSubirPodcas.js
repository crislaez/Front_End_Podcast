import React from 'react';

//css
import './FormularioSubirPodcas.css';

class FormularioSubirPodcas extends React.Component{

    constructor(props){
        super(props);
        this.state = 
            {
                titulo:'',
                mp3:'',
                foto:''
            };
    }

    handleSubmit = (event) => {
        event.preventDefault();

        if(localStorage.getItem('primariKey')){
            if(!this.state.titulo){
                alert('Rellene le titulo del podcast');
            }
            else if(!this.state.mp3){
                alert('escoja el podcast');
            }
            else if(!this.state.foto){
                alert('escoja la foto para el podcast');
            }
            else{

                var formData = new FormData();
                formData.append("id_usuario", localStorage.getItem('primariKey'));
                formData.append("id_podcast", '');
                formData.append("titulo", this.state.titulo);
                formData.append("mp3", this.state.mp3);
                formData.append("foto", this.state.foto);    
               
                fetch('http://localhost:3001/api/podcast',{method:'POST',body:formData, headers: { //'Content-Type': '"multipart/form-data;',
                }})
                .then(data => data.json())
                .then(response => {
                    // console.log(response);
                    const funcionAparecerFormularioSubirPodcast = this.props.funcionAparecerFormularioSubirPodcast;
                    funcionAparecerFormularioSubirPodcast();

                })
                .catch(err => {
                    console.log(err.message)
                })
            }
        }      
        // this.setState({titulo:'',mp3:'',foto:''})
    }
    
    render(){
        return(
            <div className=' articleFormulario'>
                <div className='contenedorFormulario'>
                    <div className='divTituloFormularioSubir'>
                        <h3>SUBA SU PODCAST</h3>
                        <button onClick={this.props.funcionAparecerFormularioSubirPodcast}>X</button>
                    </div>

                    <form action='' method='POST' encType='multipart/form-data' onSubmit={this.handleSubmit}>
                        <input type='text' value={this.state.titulo} onChange={(params) => {this.setState({titulo:params.target.value})}} placeholder='titulo...'></input>
                        <br></br>
                        <input type='file' onChange={(params) => {this.setState({mp3:params.target.files[0]})}} placeholder='podcast...'></input>
                        <br></br>
                        <input type='file' onChange={(params) => {this.setState({foto:params.target.files[0]})}} placeholder='foto...'></input>
                        <br></br>
                        <input type='submit' value='Guardar'></input>
                    </form>

                </div>
            </div>
        )
    }
}

export default FormularioSubirPodcas;