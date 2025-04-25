import React from "react" ;
import api   from "../api/axios.js"; 
import User  from "./User"; 


let users = [] ;

const btnHanlder = async () => {
    console.log(">>>>>>>>>> btn click") ;  
    const data = {
        title : "react",
        content : "react",
        priority : 10 
    };

    // endpoint : http://localhost:8088/react/select 
    const response = await api.post('/react/select', data); 
    console.log("debug >>>> " , response); 
    console.log("debug >>>> data " , response.data) ;
    users = response.data ;

};

function Interlocking(props) {
    return (
        <div>
            <button onClick={btnHanlder}>click</button>
        {
            users.map( (user) => {
                return (
                    <User name={user.title} info={user.content} /> 
                );
            })
        }
        </div>
    );
}

export default Interlocking ;