import React from "react" ;

function Book(props) {
    return (
        <div>
            <h1>{`책 이름 : ${props.name} , ${props.color}`}</h1>
        </div>
    );
}

export default Book ; 