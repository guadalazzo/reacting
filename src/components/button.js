import React, { Component } from 'react';
class Button extends React.Component{

    render() {
        return(
            <button onClick={this.props.onClickFunct}> +1 </button>
        )
    }
}
export default Button;