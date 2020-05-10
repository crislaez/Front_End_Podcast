import React from 'react';

//css
import './Aside.css'

class Aside extends React.Component{

    // funcionBuscarUsuario
    constructor(props){
        super(props);
        this.state = 
            {
                usuario:'',              
            }
    }

    handleSubmit = (event) => {
        event.preventDefault();
  
        if(!this.state.usuario){
            alert('Rellene el usuario correctamente')
        }
        else{
            fetch('http://localhost:3001/api/podcastByUser/'+this.state.usuario, {method:'GET'})
            .then(data => data.json())
            .then(response => {
                let usuario = this.state.usuario
                //si existe el usuario...
                if(response.data.data.toString()){
                    //llamamos a la funcion que esta en el section y pasamos el array con todos los podcas
                    const funcionBuscarUsuario = this.props.funcionBuscarUsuario;
                    funcionBuscarUsuario(response.data.data, usuario);
                    //llamamos a la funcion que esta en app.js para cerrar el menu aside
                    const funcionAParecerNav = this.props.funcionAParecerNav;
                    funcionAParecerNav();
                    //llamaos a la funcion que esta en app para que se carga el componente perfilbuscador
                    const funcionCambiarVentanaPerfilBuscador = this.props.funcionCambiarVentanaPerfilBuscador;
                    funcionCambiarVentanaPerfilBuscador();
                }else{
                    //si no se a encontrado el usuario...
                    alert('usuario no encontrado');
                }                
            })
            .catch(err => {
                console.log(err.message);
            })
        }
        // this.setState({usuario:''})
    }

    render(){

        return(
            <aside style={{width:this.props.aparecerAside}}>
                <form onSubmit={this.handleSubmit} action='' method='' encType='multipart/form-data'>
                    <input type='text' value={this.state.usuario} onChange={(params) =>{this.setState({usuario:params.target.value})}} placeholder='usuario...'></input>
                    <input type='submit' value='Buscar'></input>
                </form>
            </aside>
        )
    }
}

export default Aside;