import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
//components
import Button from './components/button.js';
import Result from './components/result.js';

class App extends React.Component{
    state = { counter: 0 };
    incrementCounter = ()=>{
        this.setState((prevState)=>({
            counter : prevState.counter + 1
        }));
    }
	render() {
		return (
			<div>
			    <Button onClickFunct={this.incrementCounter}/>
                <Result val={this.state.counter} />
			</div>
			);
	}
}
ReactDom.render(<App /> , root);
