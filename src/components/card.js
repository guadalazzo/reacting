import React from 'react';
const Card = (props) =>{
    return(
        <div style={{display: 'flex' , margin:10}}>
            <img width="75" height='75' src={props.avatar_url} alt={props.name} />
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