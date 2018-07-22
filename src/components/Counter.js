import React from "react";
import ReactDom from "react-dom";
import "../index.css";
//components
import Button from "./button.js";
import Result from "./result.js";

class Counter extends React.Component {
    state = {
        counter: 0
    };

    incrementCounter = incrementValue => {
        this.setState(prevState => ({
            counter: prevState.counter + incrementValue
        }));
    };
    render() {
        return (
            <div>
                <section className="counter">
                    <Button incrementValue={1} onClickFunct={this.incrementCounter} />
                    <Button incrementValue={5} onClickFunct={this.incrementCounter} />
                    <Button incrementValue={10} onClickFunct={this.incrementCounter} />
                    <br />
                    <br />
                    <Result counter={this.state.counter} />
                    <hr />
                </section>

            </div>
        );
    }
}
export default Counter;