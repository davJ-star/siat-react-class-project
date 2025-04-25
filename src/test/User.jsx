import React from "react" ;

function User(props) {
    return (
       <div>
            <span>{props.name}</span>
            &nbsp;&nbsp;&nbsp;
            <span>{props.info}</span>
       </div> 
    );
}

export default User ;