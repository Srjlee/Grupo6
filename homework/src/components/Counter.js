import React, { Component } from "react";
import { connect } from 'react-redux';
import { increment, decrement } from '../actions';

class Counter extends Component {
    // Extra Credit
    incrementIfOdd = () => {
      //Implementar una función de incremento que sólo aumenta si el valor del contador es impar
      if(this.props.count % 2 !==0) {
          this.props.increment()
      }
    };
    // Extra Credit
    incrementAsync = () => {
        //  Implementar una función de incremento que aumenta después de esperar un segundo
        setTimeout(() => {
            this.props.increment()
          }, 3000);
    };

    render() {
        // Completa las funciones onClick de los botones
        // Al hacer clic en estos botones, el recuento debe disminuir o aumentar en consecuencia
        return (
            <p>
                Count 2 sin Clickeado: {this.props.count2} veces  
                <button id="2" onClick={(e) => {
                    let id = e.target.id;
                    console.log(id);
                    this.props.increment(id)}}>+ count2</button>
                <br></br>

                Clickeado: {this.props.count} veces
                <button id="1" onClick={(e) =>{ 
                    let id = e.target.id
                    console.log(id)
                    this.props.increment(id)}}>
                    + {/* Incremeta */}
                </button>
                <button onClick={this.props.decrement}>
                    -  {/* Decrementa */}
                </button>
                 
                <button onClick={this.incrementIfOdd}>
                    incrementa si es impar
                </button>
                <button onClick={this.incrementAsync}>
                    Incrementa despues de un segundos
                </button> 
            </p>
        );
    }
}

// La función mapStateToProps especifica qué porción del árbol de estados necesita recibir este componente.
// En este caso, dado que nuestro store de redux sólo almacena el valor del contador,
// este componente recibe el estado completo.
// Sin embargo, en una aplicación redux más compleja,
// recibiría sólo las partes relevantes que necesita del objeto de estado.
const mapStateToProps = (state) => {
    return {
        count: state.count,
        count2: state.count2
    };
};

// Se llama a la función de connect para que este componente conozca el resto de la arquitectura de redux.
// Sin esto, este componente es sólo un componente tonto de React.
//Pasamos todas las funciones que dependen de Redux, junto con el propio componente,
// para que Redux se dé a conocer a este componente.
export default connect(mapStateToProps, { increment, decrement })(Counter);
