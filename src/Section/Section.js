import React from 'react';

//css
import './Section.css';

//Componentes
import Aside from '../Aside/Aside'

class Section extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <section>
             <Aside aparecerAside={this.props.aparecerAside}></Aside>
            {
                this.props.cambioVentanas === 'bVetTodos'
                ?
                <h2>Ver Todo</h2>
                :
                <div></div>
            }
            </section>
        )
    }
}

export default Section;