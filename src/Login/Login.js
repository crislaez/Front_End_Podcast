import React from 'react';

//css
import './Login.css'

class Login extends React.Component{

    _isMount = false;

    constructor(props){
        super(props);
        this.state = 
            {
                correo:'',
                clave:''
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

        if(!this.state.correo){
            alert('Rellene el correo correctamente');
        }
        else if(!this.state.correo){
            alert('Rellene el correo correctamente');
        }
        else{
            const data = new URLSearchParams(`correo=${this.state.correo}&clave=${this.state.clave}`);
           
            fetch('http://localhost:3001/api/login',{method:'POST',body:data})
            .then(data => data.json())
            .then(response => {
                console.log(response.data.data[0])
                if(response.data.data[0]){
                    alert('Logeado');
                    //llamamos a la funcion que esta en app.js para pasarle un objeto, y que guarde el indice en el localStoprage
                    //y el nombre del usuario
                    let usuarioResponse = 
                        {
                            nombre:response.data.data[0].nombre,
                            primariKey:response.data.data[0].id_usuario
                        };
                        
                    const funcionCambarLoginACerrarSesion = this.props.funcionCambarLoginACerrarSesion;
                    funcionCambarLoginACerrarSesion(usuarioResponse);
                    //llamamos a la funcin del loguin que esta en app.js para cerrar la ventana de login
                    const funcionAparecerLogin = this.props.funcionAparecerLogin;
                    funcionAparecerLogin();
                }
                else{
                    alert('el correo o la clave es incorrecta');
                }
            })
            .catch(err => {
                console.log(err.message);
            })
            // console.log(this.state.correo);
            // console.log(this.state.clave);
        }
        
        this.setState({correo:'', clave:''});
    }

    render(){

        return(
            <div className='articleLogin'>

                <div className='contenedorLogin'>
                    <div className='divTituloLogin'>
                        <h3>LOGIN</h3>
                        <button onClick={this.props.funcionAparecerLogin}>X</button>
                    </div>

                    <form onSubmit={this.handleSubmit} action='' method='POST' encType='multipart/form-data'>
                        <input type='email' value={this.state.correo} onChange={(params) => {this.setState({correo:params.target.value})}} placeholder='correo...'></input>
                        <br></br>
                        <input type='password' value={this.state.clave} onChange={(params) => {this.setState({clave:params.target.value})}} placeholder='clave...'></input>
                        <br></br>
                        <input type='submit' value='Login'></input>
                    </form>
                </div>
                
            </div>
        );
    }
}

export default Login;