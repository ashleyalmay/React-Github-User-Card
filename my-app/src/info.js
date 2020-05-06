import React from "react";


const me = props => {
    console.log(props)
    return(
        <div>
        <img src={props.myinfo.avatar_url}/>
        <p>{props.myinfo.login}</p>
        </div>
            )}
       
export default me;