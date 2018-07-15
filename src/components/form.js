import React from "react";
class Form extends React.Component{
    state = {
        userName : ''
    }
    handleSubmit = async (event) => {
        event.preventDefault();
        const request = await fetch(`https://api.github.com/users/${this.state.userName}`);
        const response = await request.json();
        this.props.onSubmit(response);
    }
    render(){
        return(
            <form action="get" onSubmit={this.handleSubmit}>
                <input
                    value={this.state.userName}
                    onChange={(event)=>
                        this.setState({
                            userName: event.target.value
                        })
                    }
                    type="text"
                    placeholder='Github Username'/>
                <button type="submit">Add Card</button>
            </form>
        );
    }
}
export default Form;