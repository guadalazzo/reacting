import React, { Component } from 'react';
const Card = (props) =>{
    return(
        <div style={{display: 'flex' , margin:10}}>
            <img src={props.avatar_url} alt={props.name} />
            <div style={{marginLeft:10,marginTop: 10}} >
                <div style={{fontWeight:'bold',}}>
                    {props.name}
                </div>
                <div >
                    {props.company}
                </div>
            </div>
        </div>
    )
}
export default Card;