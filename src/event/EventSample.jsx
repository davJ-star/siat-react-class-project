import React from "react";


function EventSample(props) {
    const handler = (id, pwd) => {
        console.log(">>> btn click " , id, pwd);  
        const data = { "id" : id , "pwd" : pwd } 
        // axios.port("http://ip:port/user/login" , data); 
    }
    return (
        <div>
            <button onClick={ () => handler('jslim', 'jslim') }>click</button>
        </div>
    );
}

export default EventSample ;