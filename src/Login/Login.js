import React from 'react';

//css
import './Login.css'

class Login extends React.Component{

    render(){

        return(
            <div className='articleLogin'>

                <div className='contenedorLogin'>
                    <div className='divTituloLogin'>
                        <h3>LOGIN</h3>
                        <button onClick={this.props.funcionAparecerLogin}>X</button>
                    </div>

                    <form>
                    </form>
                </div>
                
            </div>
        );
    }
}

export default Login;