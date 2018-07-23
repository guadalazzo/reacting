import React from "react";
import "../index.css";
//components
import CardList from "./cardList.js";
import Form from "./form.js";

class GithubCards extends React.Component {
    state = {
        cards: []
    };

    addNewCard = cardInfo => {
        this.setState(prevState => ({
            cards: prevState.cards.concat(cardInfo)
        }));
    };
    render() {
        return (
            <div>

                <section className="githubscards">
                    <Form onSubmit={this.addNewCard} />
                    <CardList cards={this.state.cards} />
                </section>
            </div>
        );
    }
}
export default GithubCards;
