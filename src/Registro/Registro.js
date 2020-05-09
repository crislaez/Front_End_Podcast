import React from 'react';

//css
import './Registro.css'

class Registro extends React.Component{
    
    _isMount = false;
    
    constructor(props){
        super(props);
        this.state = 
            {
                nombre:'',
                apellido:'',
                nacimiento:'',
                correo:'',
                clave:'',
                rClave:''

            };
    }

    componentDidMount(){
        this._isMount = true;
    }

    componentWillUnmount(){
        this._isMount = false;
    }

    handleSubmit = (event) => { 
        event.preventDefault();
        if(!this.state.nombre){
            alert('Rellene el nombre correctamente');
        }
        else if(!this.state.apellido){
            alert('Rellene el apellido correctamente');
        }
        else if(!this.state.nacimiento){
            alert('Rellene el nacimiento correctamente');
        }
        else if(!this.state.correo){
            alert('Rellene el correo correctamente');
        }
        else if(!this.state.clave){
            alert('Rellene el clave correctamente');
        }
        else if(!this.state.rClave || this.state.rClave !== this.state.clave){
            alert('Las claves deben coincidir');
        }
        else{

            const data = new URLSearchParams(`nombre=${this.state.nombre}&apellido=${this.state.apellido}&nacimiento=${this.state.nacimiento}&correo=${this.state.correo}&clave=${this.state.clave}`);

            fetch('http://localhost:3001/api/addUser',{method:'POST', body:data})
            .then(data => data.json())
            .then(response => {
            
                alert('usuario ingresado correctamente');
                //llamamos a la funcion que esta en app.js para que se cierre la ventana de registro
                const funcionAparecerRegistro = this.props.funcionAparecerRegistro;
                funcionAparecerRegistro();
                //llamamos a la funcion que esta en app.js para que se cierre la ventana registro y se carge la ventana login
                const funcionAparecerLogin = this.props.funcionAparecerLogin;
                funcionAparecerLogin();
            })
            .catch(err => {
                console.log(err.message);
            })
        }
        //limpiamos las variables del estado
        this.setState({nombre:'',apellido:'',nacimiento:'',correo:'',clave:'',rClave:''});
    }

    render(){

        return(
            <div className='articleRegistro'>

                <div className='contenedorRegistro'>
                    <div className='divTituloRegistro'>
                        <h3>REGISTRO</h3>
                        <button onClick={this.props.funcionAparecerRegistro}>X</button>
                    </div>
                    
                    <form onSubmit={this.handleSubmit} action='' method='POST' encType='multipart/form-data'>
                        <input type='text' value={this.state.nombre} onChange={(params) => {this.setState({nombre:params.target.value})}} placeholder='nombre...'></input>
                        <br></br>
                        <input type='text' value={this.state.apellido} onChange={(params) => {this.setState({apellido:params.target.value})}} placeholder='apellido...'></input>
                        <br></br>
                        <input type='date' value={this.state.nacimiento} onChange={(params) => {this.setState({nacimiento:params.target.value})}} placeholder='nacimiento...'></input>
                        <br></br>
                        <input type='email' value={this.state.correo} onChange={(params) => {this.setState({correo:params.target.value})}} placeholder='correo...'></input>
                        <br></br>
                        <input type='password' value={this.state.clave} onChange={(params) => {this.setState({clave:params.target.value})}} placeholder='clave...'></input>
                        <br></br>
                        <input type='password' value={this.state.rClave} onChange={(params) => {this.setState({rClave:params.target.value})}} placeholder='repetir la clave...'></input>
                        <br></br>
                        <input type='submit' value='Registrarse'></input>
                    </form>
                </div>

            </div>
        )
    }
}

export default Registro;