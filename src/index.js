import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
//components
import Button from './components/button.js';
import Result from './components/result.js';
import CardList from './components/cardList.js';

let data = [{
    name: "Paul tom",
    avatar_url :"http://via.placeholder.com/75x75",
    company: "Facebook",
},
    {
        name: "Paul tom",
        avatar_url :"http://via.placeholder.com/75x75",
        company: "Facebook",
    }]

class App extends React.Component{
    state = { counter: 0 };

    incrementCounter = (incrementValue)=>{
        this.setState((prevState)=>({
            counter : prevState.counter + incrementValue
        }));
    };

	render() {
		return (
			<div>
                <section className='counter'>
                    <Button incrementValue={1} onClickFunct={this.incrementCounter}/>
                    <Button incrementValue={5} onClickFunct={this.incrementCounter}/>
                    <Button incrementValue={10} onClickFunct={this.incrementCounter}/>
                    <br />
                    <br />
                    <Result counter={this.state.counter} />
                    <hr/>
                </section>
                <section className='githubscards'>
                    <CardList cards={data} />
                </section>
            </div>
			);
	}
}
ReactDom.render(<App /> , root);
