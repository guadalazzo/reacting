import React from "react";
import "../index.css";
import Stars from "./stars";
import ButtonGame from "./button-game";
import Answer from "./answer";
import Numbers from "./numbers";
//components

class Game extends React.Component {
    state = {
        selectedNumbers:[],
        randomNumberOfStars: 1 + Math.floor(Math.random() * 9),
    };
    selectNumber = (clickedNumber) => {
        if(this.state.selectedNumbers.indexOf(clickedNumber) >= 0){ return; }
        this.setState(prevState => ({
            selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
            }));

    }
    render() {
        return (
            <div className="container">
                <h3>Play Nine</h3>
                <hr/>
                <div className="row">
                    <Stars numbersOfStars={this.state.randomNumberOfStars}/>
                    <ButtonGame />
                    <Answer selectedNumbers={this.state.selectedNumbers}
                        //paso los numeros seleccionados
                     />
                </div>
                <br />
                <Numbers
                    selectedNumbers={this.state.selectedNumbers}
                    //paso los numeros seleccionados
                    selectNumber={this.selectNumber}
                    //paso la funcion sin ejecutar
                />
            </div>
        );
    }
}
export default Game;