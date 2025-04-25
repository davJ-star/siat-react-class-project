import React from "react" ;
import User  from "./User";

const users = [
    { name : "섭서비" , info : "강사"},
    { name : "박신형" , info : "학생"}
];

function UserList(props) {
    return (
        <div>
            {
                users.map( (user) => {
                    return (
                        <User name={user.name} info={user.info} /> 
                    );
                })
            }
        </div>
    );
}

export default UserList ;