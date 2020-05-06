import React from "react";

const me = props => {
    
    return(
        <div>
        <img src={ props.img}/>
        <h3>{props.name}</h3>
        <p>{props.username}</p>
        <p>{props.profile}</p>
        <p>{props.followers}</p>
        <p>{props.following}</p>
        <p>{props.bio}</p>

        </div>
            )}
       
export default me;