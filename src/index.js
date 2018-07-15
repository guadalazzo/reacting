import React from "react";
import ReactDom from "react-dom";
import "./index.css";
//components
import Button from "./components/button.js";
import Result from "./components/result.js";
import CardList from "./components/cardList.js";
import Form from "./components/form.js";

class App extends React.Component {
  state = {
    counter: 0,
    cards: []
  };

  incrementCounter = incrementValue => {
    this.setState(prevState => ({
      counter: prevState.counter + incrementValue
    }));
  };
  addNewCard = cardInfo => {
    this.setState(prevState => ({
      cards: prevState.cards.concat(cardInfo)
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
        <section className="githubscards">
          <Form onSubmit={this.addNewCard} />
          <CardList cards={this.state.cards} />
        </section>
      </div>
    );
  }
}
ReactDom.render(<App />, root);
